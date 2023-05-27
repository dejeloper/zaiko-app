import { useState } from "react";


function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
          <li className="mr-2" role="presentation">
            <button className={toggleState === 1 ? "tab tab-active" : "tab"} onClick={() => toggleTab(1)} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
          </li>
          <li className="mr-2" role="presentation">
            <button className={toggleState === 2 ? "tab tab-active" : "tab"} onClick={() => toggleTab(2)} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
          </li>
          <li className="mr-2" role="presentation">
            <button className={toggleState === 3 ? "tab tab-active" : "tab"} onClick={() => toggleTab(3)} id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
          </li>
          <li role="presentation">
            <button className={toggleState === 4 ? "tab tab-active" : "tab"} onClick={() => toggleTab(4)} id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        <div className={toggleState === 1 ? "tab-content block" : "tab-content hidden"} id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Profile tabs associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
        </div>
        <div className={toggleState === 2 ? "tab-content block" : "tab-content hidden"} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
          <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tabs associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
        </div>
        <div className={toggleState === 3 ? "tab-content block" : "tab-content hidden"} id="settings" role="tabpanel" aria-labelledby="settings-tab">
          <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Settings tabs associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
        </div>
        <div className={toggleState === 4 ? "tab-content block" : "tab-content hidden"} id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
          <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Contacts tabs associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
        </div>
      </div>
      {/*   
    <div className="container flex flex-col relative w-[500px] h-[300px] bg-[#f1f1f1] mt-[100px] mx-auto mb-0 break-all border border-solid border-black/30">
      <div className="bloc-tabs flex">
        <button
          className={toggleState === 1 ? "tabs p-4 text-center w-1/2 bg-white cursor-pointer box-content relative outline-none active-tabs  border-b border-transparent " : "tabs p-4 text-center w-1/2 bg-[#808080] cursor-pointer box-content relative outline-none   tabs text-white border-b border-black/30 "}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </button>
        <button
          className={toggleState === 2 ? "tabs p-4 text-center w-1/2 bg-white cursor-pointer box-content relative outline-none active-tabs  border-b border-transparent " : "tabs p-4 text-center w-1/2 bg-[#808080] cursor-pointer box-content relative outline-none   tabs text-white border-b border-black/30 "}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </button>
        <button
          className={toggleState === 3 ? "tabs p-4 text-center w-1/2 bg-white cursor-pointer box-content relative outline-none active-tabs border-b border-transparent " : "tabs p-4 text-center w-1/2 bg-[#808080] cursor-pointer box-content relative outline-none tabs text-white border-b border-black/30"}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </button>
      </div>

      <div className="content-tabs flex flex-grow">
        <div
          className={toggleState === 1 ? "content bg-white p-5 w-full h-full  active-content block" : "content bg-white p-5 w-full h-full hidden "}
        >
          <h2 className="pb-1">Content 1</h2>
          <hr className="w-[100px] h-0.5 bg-[#222] mb-1.5" />
          <p className="w-full h-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content bg-white p-5 w-full h-full    active-content block" : "content bg-white p-5 w-full h-full hidden "}
        >
          <h2 className="pb-1">Content 2</h2>
          <hr className="w-[100px] h-0.5 bg-[#222] mb-1.5" />
          <p className="w-full h-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content bg-white p-5 w-full h-full    active-content block" : "content bg-white p-5 w-full h-full hidden "}
        >
          <h2 className="pb-1">Content 3</h2>
          <hr className="w-[100px] h-0.5 bg-[#222] mb-1.5" />
          <p className="w-full h-full">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div> */}
    </>
  );
}

export default Tabs;