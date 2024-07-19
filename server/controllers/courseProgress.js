const mongoose = require("mongoose")
const Section = require("../models/Section")
const SubSection = require("../models/Subsection")
const CourseProgress = require("../models/CourseProgress")
const Course = require("../models/Course")
// const { courseEndpoints } = require("../../src/services/apis")

exports.updateCourseProgress = async (req, res) => {
    const { courseId, subsectionId } = req.body
    const userId = req.user.id

    console.log(userId);

    try {
        // Check if the subsection is valid
        const subsection = await SubSection.findById(subsectionId)
        if (!subsection) {
            return res.status(404).json({ error: "Invalid subsection" })
        }

        //check for old entry
        let courseProgress = await CourseProgress.findOne({
            courseID: courseId,
            userId: userId,
        })

        if (!courseProgress) {
            return res.status(404).json({
                success: false,
                message: "Course progress does not exist"
            })
        }
        else {
            //check for re-completing video ya subsection
            if (courseProgress.completedVideos.includes(subsectionId)) {
                return res.status(400).json(
                    {
                        success: false,
                        message: "Subsection already completed",
                    }
                )
            }

            //push into completed videos
            courseProgress.completedVideos.push(subsectionId);

            await courseProgress.save();

            return res.status(200).json({
                success: true,
                message: "Course Progress Updated Successfully",
            })
        }



    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: "Internal server error" })
    }
}

