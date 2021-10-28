import React from "react";
import "./App.css";
import axios from "axios";

const TOTAL_PAGES = 10;

//t
// const ToggleElement = () => {
//   const [visible, setVisible] = React.useState(false);
  // return (
   
  // );
// };

const Item = ({ children, reference }) => {
  return <div ref={reference}>{children}</div>;
};

const Loader = () => {
  return (
    <div>
      <h1>loading....</h1>
    </div>
  );
};

function Datas() {
  const [visible, setVisible] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasMore, setHasMore] = React.useState(true);
  const [pages, setPages] = React.useState(1);
  const observer = React.useRef();

  React.useEffect(() => {
    getItems(pages);
    setPages((pages) => pages + 1);
  }, []);

  const lastItemRef = React.useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          if (pages < TOTAL_PAGES) {
            getItems(pages);
            setPages((pages) => pages + 1);
          } else {
            setHasMore(false);
          }
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  const getItems = async (page) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await axios
      .get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=5`)
      .then((resp) => {
        setItems([...items, ...resp?.data?.data]);
        setIsLoading(false);
      });
  };

  return (
    <div >
    <button className="buton" onClick={() => setVisible(!visible)}>
      {visible ? '<select value>' : '<select value>'}
    </button>
    {visible && <div>
  
    
    <div className="centered">
      <div className="container mx-auto px-4">
        <div className="flex justify-center p-4 mb-4">
         
        </div>
        <div className="flex flex-col">
          {items.map((item, index) =>
            index + 1 === items.length ? (
              <Item reference={lastItemRef} key={index}>
                <div className="w-full md:w-3/5 bg-gray-300 mx-auto p-4 rounded mb-4 flex">
                  {/* <img src={item.thumbnailUrl} alt={`Image ${index}`} className="flex-auto mr-4" width="150" height="150" /> */}
                  <div className="flex-auto">
                    <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
                  </div>
                </div>
              </Item>
            ) : (
              <Item key={index}>
                <div className="w-full md:w-3/5 bg-gray-300 mx-auto p-4 rounded mb-4 flex">
                  {/* <img src={item.thumbnailUrl} className="flex-auto mr-4" width="150" height="150" /> */}
                  <div className="flex-auto">
                    <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
                  </div>
                </div>
              </Item>
            )
          )}

          {isLoading && <Loader />}
        </div>
      </div>
    </div>
    </div>}
    </div>
  );
}

export default Datas;
