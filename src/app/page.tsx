import Footer from "@/components/common/footer/Footer";
import CategoryHeader from "@/components/common/header/CategoryHeader";
import SearchHeader from "@/components/common/header/SearchHeader/SearchHeader";
import MainPage from "@/components/mainPage/MainPage";

const page = () => {
  return (
    <>
      <SearchHeader />
      <CategoryHeader />
      <MainPage />
      <Footer />
    </>
  );
};

export default page;
