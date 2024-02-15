import lunr from "lunr";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faCommentDots, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import axios from "axios";

const SearchComponent = () => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/chatbots`);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching API data:", error.message);
      }
    };
    fetchData();
  }, []);

  if (data !== null) {
    const lunrIndex = lunr(function () {
      this.field("id");
      this.field("pertanyaan");
      this.field("jawaban");

      data.forEach((doc) => {
        this.add({
          id: doc.id,
          pertanyaan: doc.attributes.pertanyaan,
          jawaban: doc.attributes.jawaban,
        });
      });
    });

    const searchData = (query) => {
      const result = lunrIndex.search(query);
      return result.map((item) => {
        return data.find((post) => +item.ref === post.id);
      });
    };
    const datasearch = searchData("Saya Tertarik dengan Layanan IT");
  }

  return (
    <div>
      <input type="text" placeholder="Cari..." />
      {/* <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul> */}
      {/* <p>{}</p> */}
    </div>
  );
};

export default SearchComponent;
