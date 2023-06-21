import Header from "../../Components/Header";
import vocabularies from "../../data/vocabulary.json";
import { useParams } from "react-router-dom";
import Footer from "../../Components/Footer";
import TestCards from "../../Components/TestCards";

export default function TestPage () {

  const {theme_id} = useParams();
  let filter = vocabularies.filter (function(element) {
    return element.id_theme === theme_id
  })
  filter = filter.sort(function() {return Math.random() - 0.5});
  filter = filter.slice(0,10);
    return (
        <>

        <Header></Header>
        <TestCards filter = {filter}></TestCards>
        <Footer></Footer>
     
        </>
    );
}