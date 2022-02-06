import { useEffect } from "react";
import { useState } from "react";


const useCourses = () => {
    const [courses, setCourses] = useState([])
    const url = 'https://raw.githubusercontent.com/shakilkhanSAU/raw-data-repository/main/courses.json'

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCourses(data)
            }
            )
    }, [])
    return {
        courses
    }

}

export default useCourses;