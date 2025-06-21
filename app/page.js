import Header from "@/components/Header";
import Footer from "@/components/Footer";

// import Counter from "@/components/Counter";
// import Messenger from "@/components/Messenger";
// import SortForm from "@/components/SortForm";
// import TestComponent from "@/components/TestComponent";
// import CustomizeModal from "@/components/CustomizeModal";
// import SearchWidget from "@/components/SearchWidget";

export default function Home() {
  return (
    <article>
      <Header>Components Playground</Header>
      <main>
        {/* This is the main content area of the page. */}

        <TestComponent />

        {/* End of main content area. */}
      </main>
      <Footer />
    </article>
  );
}
