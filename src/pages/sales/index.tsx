import { ZaikoLayout } from "@/components/layouts";
import Tabs from "@/components/ui/Tabs";
import { Product } from "@/interfaces/products";
import { products } from "@/services/products";

const SalesPage = () => {

  const productList: Product[] = products;

  return (
    <ZaikoLayout title={"Pos - Punto de Venta"} pageDescription={"Punto de venta - Venta inmediata"} >
      <header className="select-none">
        <h2 className="text-2xl font-semibold">
          Punto de Venta
        </h2>
      </header>
      <Tabs />
      <main className="hidden">
        <div className="max-w-2xl mx-auto">

          <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
            <ul className="flex flex-wrap -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
              <li className="mr-2" role="presentation">
                <button className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
              </li>
              <li className="mr-2" role="presentation">
                <button className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 active" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="true">Dashboard</button>
              </li>
              <li className="mr-2" role="presentation">
                <button className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
              </li>
              <li role="presentation">
                <button className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
              </li>
            </ul>
          </div>
          <div id="myTabContent">
            <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <p className="text-gray-500 dark:text-gray-400 text-sm">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Profile tabs associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
              <p className="text-gray-500 dark:text-gray-400 text-sm">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tabs associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden" id="settings" role="tabpanel" aria-labelledby="settings-tab">
              <p className="text-gray-500 dark:text-gray-400 text-sm">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Settings tabs associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
              <p className="text-gray-500 dark:text-gray-400 text-sm">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Contacts tabs associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
            </div>
          </div>

          <p className="mt-5">This tabs component is part of a larger, open-source library of Tailwind CSS components. Learn more by going to the official <a className="text-blue-600 hover:underline" href="#" target="_blank">Flowbite Documentation</a>.</p>
        </div>
      </main>
    </ZaikoLayout>
  )
}


export default SalesPage;