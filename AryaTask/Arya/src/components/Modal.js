import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import { dataProvider } from "../context/context";

export default function Modal() {
  const { isOpen, closeModal } = useContext(dataProvider);

  const [data, setData] = useState({
    name: "",
    pname: "",
    pno: "",
    usercontact: "",
    useremail: "",
    message: "",
    password: "",
    cpassword: "",
  });
  const [foc, setFoc] = useState("white");
  const [error, setError] = useState({});
  function getData(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function focus() {
    foc === "white" ? setFoc("yellow") : setFoc("white");
  }

  function postData(e) {
    e.preventDefault();

    const validationErrors = {};
    if (!data.name.trim()) {
      validationErrors.name = "User Name Is Required";
    } else if (!data.name.match(/^[a-zA-Z ]*$/)) {
      validationErrors.name = "User Name Is Not Valid";
    } else if (data.name.length < 4) {
      validationErrors.name = "User Name atleast minimum 5 character";
    }
    if (data.usercontact.length < 10 || data.usercontact.length > 10) {
      validationErrors.usercontact = "Please Enter Valid Number";
    }

    if (data.useremail === "") {
      validationErrors.useremail = "User Email Is Required";
    } 

    if (data.password === "") {
      validationErrors.password = "Please Enter Password";
    } else if (data.password.length < 10) {
      validationErrors.password = "Please enter Minimum 10 Character";
    }
    if (data.cpassword !== data.password) {
      validationErrors.cpassword = "Password is not Match";
    }

    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Succesfully Submitted");
      setData({
        name: "",
        pname: "",
        pno: "",
        usercontact: "",
        useremail: "",
        message: "",
        password: "",
        cpassword: "",
      })
    }
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Thanks you so much for taking the time!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-md text-gray-500">
                      Please provide the below details!
                    </p>

                    <form
                      className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-md"
                      onSubmit={(e) => postData(e)}
                    >
                      <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">
                          User Name:
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={
                            data.name
                          }
                          onChange={getData}
                          className="mt-1 p-2 w-full border rounded outline-none"
                          placeholder="Enter Name Here"
                        />
                        <span className="text-red-500">{error.name}</span>
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="usercontact"
                          className="block text-gray-700"
                        >
                          User Contact No:
                        </label>
                        <input
                          type="number"
                          id="usercontact"
                          value={
                            data.usercontact
                          }
                          name="usercontact"
                          onChange={getData}
                          className="mt-1 p-2 w-full border rounded outline-none"
                          placeholder="Enter Contact No Here"
                        />
                        <span className="text-red-500">
                          {error.usercontact}
                        </span>
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="useremail"
                          className="block text-gray-700"
                        >
                          User Email:
                        </label>
                        <input
                          type="email"
                          id="useremail"
                          name="useremail"
                          value={data.useremail}
                          onChange={getData}
                          className="mt-1 p-2 w-full border rounded outline-none"
                          placeholder="Enter Email Here"
                        />
                        <span className="text-red-500">{error.useremail}</span>
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="password"
                          className="block text-gray-700"
                        >
                          User Password:
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={data.password}
                          onChange={getData}
                          className="mt-1 p-2 w-full border rounded outline-none"
                          placeholder="******"
                        />
                        <span className="text-red-500">{error.password}</span>
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="cpassword"
                          className="block text-gray-700"
                        >
                          Confirm Password:
                        </label>
                        <input
                          type="password"
                          id="cpassword"
                          name="cpassword"
                          value={data.cpassword}
                          onChange={getData}
                          className="mt-1 p-2 w-full border rounded outline-none"
                          placeholder="******"
                        />
                        <span className="text-red-500">{error.cpassword}</span>
                      </div>

                      <div className="mb-4">
                        <label htmlFor="pname" className="block text-gray-700">
                          Product Name:
                        </label>
                        <input
                          type="text"
                          id="pname"
                          name="pname"
                          value={
                            data.pname.charAt(0).toUpperCase() +
                            data.pname.slice(1).toLowerCase()
                          }
                          onChange={getData}
                          className="mt-1 p-2 w-full border rounded outline-none"
                          placeholder="Product Name Here"
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="pno" className="block text-gray-700">
                          Product No. :
                        </label>
                        <input
                          type="text"
                          id="pno"
                          name="pno"
                          value={data.pno.toUpperCase()}
                          onChange={getData}
                          className="mt-1 p-2 w-full border rounded outline-none"
                          placeholder="Enter Product No Here"
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="message"
                          className="block text-gray-700"
                        >
                          Any Query Message:
                        </label>
                        <textarea
                          rows="5"
                          id="message"
                          name="message"
                          onChange={getData}
                          value={data.message}
                          className="mt-1 p-2 w-full border rounded resize-none outline-none"
                          placeholder="Write Here..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded-md"
                      >
                        Submit
                      </button>
                    </form>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
