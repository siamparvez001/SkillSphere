import Banner from "@/components/Banner";
import Tips from "@/components/Tips";
import TopCourses from "@/components/TopCourses";
import TopInstructor from "@/components/TopInstructor";
import TrandingCourse from "@/components/TrandingCourse";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TopCourses></TopCourses>
      <TrandingCourse></TrandingCourse>
      <Tips></Tips>
      <TopInstructor></TopInstructor>
    </div>
  );
}
