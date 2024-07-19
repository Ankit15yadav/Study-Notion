const Category = require("../models/Category");

exports.createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        if (!name) {
            return res
                .status(400)
                .json({ success: false, message: "All fields are required" });
        }
        const CategorysDetails = await Category.create({
            name: name,
            description: description,
        });
        console.log(CategorysDetails);
        return res.status(200).json({
            success: true,
            message: "Categorys Created Successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

exports.showAllCategories = async (req, res) => {
    try {
        const allCategorys = await Category.find(
            {},
            { name: true, description: true }
        );

        if (!allCategorys) {
            console.log("Categories nhi mili")
        }
        res.status(200).json({
            success: true,
            data: allCategorys,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

//categoryPageDetails 

exports.categoryPageDetails = async (req, res) => {
    try {
        //get categoryId
        const { categoryId } = req.body;

        // //front end mai dikkt de rha tha object id string aur obj mai
        // const {}

        //get courses for specified categoryId
        const selectedCategory = await Category.findById(categoryId)
            .populate({
                path: "courses",
                match: { status: "Published" },
                populate: "ratingAndReviews",
            }).exec();

        //validation
        console.log("SELECTED COURSE", selectedCategory)
        // Handle the case when the category is not found
        if (!selectedCategory) {
            console.log("Category not found.")
            return res
                .status(404)
                .json({ success: false, message: "Category not found" })
        }
        // Handle the case when there are no courses
        if (selectedCategory.courses.length === 0) {
            console.log("No courses found for the selected category.")
            return res.status(404).json({
                success: false,
                message: "No courses found for the selected category.",
            })
        }
        //get coursesfor different categories
        const differentCategories = await Category.find({
            _id: { $ne: categoryId },
        })
            .populate({
                path: "courses",
                // match: { status: "Published" },
            }).exec();

        //get top 10 selling courses
        const allCategories = await Category.find().populate({
            path: "courses",
            match: { status: "Published" },

            // yha issue aaya tha ki firstname nhi le pa rhe the kyuki populate nhi kia tha
            populate: {
                path: "instructor"
            }
        })
            .exec();
        //HW - write it on your own
        const allCourses = allCategories.flatMap((category) => category.courses);
        const mostSellingCourses = allCourses
            .sort((a, b) => b.sold - a.sold).slice(0, 10);

        //return response
        return res.status(200).json({
            success: true,
            data: {
                selectedCategory,
                differentCategories,
                mostSellingCourses
            },
        });

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}