import React, { useRef, useState } from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { contactUsSchema } from "../../../Schema/contactUsSchema";
import emailjs from "@emailjs/browser";
import { useChatStore } from "../../../store/useChatStore";
import toast, { Toaster } from "react-hot-toast";

const SiteSettings = ({ dialogRef, settings, setSettings }) => {
  const [settingView, setSettingView] = useState("data");
  const [feedbackForm, setFeedbackForm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [submitStatus, setSubmitStatus] = useState(null);

  const chats = useChatStore((state) => state.chats);
  const clearChats = useChatStore((state) => state.clearChats);

  const appVersion = "v1.0.0";
  const formRef = useRef(null);

  async function onSubmit(values, actions) {
    const promise = emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_KEY,
      import.meta.env.VITE_EMAILJS_TEMPLATE_KEY,
      {
        name: values.name,
        email: values.email,
        phone: values.phone,
        subject: values.subject,
        message: values.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    toast.promise(promise, {
      loading: "Sending message...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
    });

    try {
      await promise;
      actions.resetForm();
    } catch (error) {
      // handled by toast
    }
  }

  const exportData = () => {
    toast.promise(
      new Promise((resolve, reject) => {
        try {
          const data = {
            chats,
          };
          const blob = new Blob([JSON.stringify(data, null, 2)], {
            type: "application/json",
          });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "TASTYMUNDO_Data.json";
          a.click();
          URL.revokeObjectURL(url);

          setTimeout(() => {
            resolve();
          }, 500);
        } catch (error) {
          reject(error);
        }
      }),
      {
        loading: "Exporting your data...",
        success: "Your data was exported successfully!",
        error: "Failed to export your data.",
      }
    );
  };

  const handleClear = () => {
    return toast.promise(
      new Promise((resolve, reject) => {
        try {
          clearChats();
          setTimeout(() => resolve(), 500);
        } catch (error) {
          reject(error);
        }
      }),
      {
        loading: "Clearing saved recipes...",
        success: "All saved recipes cleared!",
        error: "Failed to clear saved recipes.",
      }
    );
  };

  const viewForm = () => {
    setFeedbackForm((prev) => !prev);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const settingsTitles = {
    data: "Data & Privacy",
    about: "About App",
  };

  const settingsComponents = {
    data: (
      <div className="md:p-4 max-w-2xl mx-auto transition-all duration-500 ease-in-out">
        <div className="bg-gray-900 rounded-xl p-4 mb-4 shadow">
          <h3 className="text-lg font-semibold mb-2">Saved Recipes</h3>
          <p className="text-sm text-gray-400 mb-3">
            You have {chats.length} recipe{chats.length > 1 && "s"} saved on
            your device.
          </p>
          <button
            onClick={() => setIsModalOpen((prev) => !prev)}
            className="px-4 py-2 bg-red-800 text-white rounded-xl hover:bg-red-900 active:bg-red-950 transition"
          >
            Delete All Saved Recipes
          </button>

          {isModalOpen && (
            <div className="ring-2 ring-red-900 mt-5 bg-gray-800 rounded-xl p-2">
              <h3 className="text-lg font-semibold mb-2 ">
                Delete Saved Recipes
              </h3>
              <p>
                Are you sure you want to clear <strong>all Recipes</strong>?
                This action cannot be undone.
              </p>
              <div className="flex justify-end gap-x-1">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-700 text-gray-100 font-semibold rounded-xl hover:bg-gray-800 active:bg-gray-900 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    handleClear();
                    setIsModalOpen(false);
                  }}
                  className="px-4 py-2 bg-red-800 text-gray-100 font-semibold rounded-xl hover:bg-red-900 active:bg-red-950 transition"
                >
                  Clear
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 shadow">
          <h3 className="text-lg font-semibold mb-2">Export My Data</h3>
          <p className="text-sm text-gray-400 mb-3">
            Download your saved recipes and ingredients as a JSON file.
          </p>
          <button
            onClick={exportData}
            className="px-4 py-2 bg-blue-800 text-gray-100 font-semibold rounded-xl hover:bg-blue-900 active:bg-blue-950 transition"
          >
            Export My Data
          </button>
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    ),
    about: (
      <div className="md:p-4 text-gray-100 space-y-4 transition-all duration-500 ease-in-out">
        <div className="bg-gray-900 p-4 rounded-xl shadow-md space-y-2">
          <h3 className="text-lg font-medium">App Purpose</h3>
          <p className="text-sm text-gray-300">
            This app helps you generate food recipes based on ingredients you
            already have at home. It uses AI to provide smart suggestions — all
            within your browser, no internet needed after getting your RECIPE.
          </p>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl shadow-md space-y-2">
          <h3 className="text-lg font-medium">Version</h3>
          <p className="text-sm text-gray-300">{appVersion}</p>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl shadow-md space-y-2">
          <h3 className="text-lg font-medium">Data Privacy</h3>
          <p className="text-sm text-gray-300">
            All your settings, saved recipes, and preferences are stored locally
            on your device using your browser's storage (localStorage). Nothing
            is uploaded or shared — your data stays yours.
          </p>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl shadow-md space-y-2">
          <h3 className="text-lg font-medium">Limitations</h3>
          <p className="text-sm text-gray-300">
            This is a demo app and does not include real-time backend support or
            cloud syncing. Make sure to export your data if needed before
            clearing the app's storage.
          </p>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl shadow-md space-y-2">
          <h3 className="text-lg font-medium">Contact & Feedback</h3>
          <p className="text-sm text-gray-300">
            Have a suggestion or question?{" "}
            <span
              onClick={viewForm}
              className="cursor-pointer underline text-blue-400 active:text-blue-300"
            >
              Send us a Feedback
            </span>
            &nbsp;right now.
          </p>
        </div>

        {feedbackForm && (
          <div
            ref={formRef}
            className="bg-gray-900 p-4 rounded-xl shadow-md space-y-2 w-full h-full transition-all duration-200 ease-in"
          >
            <h2 className="text-2xl text-blue-400 mb-8 relative pb-4">
              Send Us a Message
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-400"></span>
            </h2>
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
              }}
              validationSchema={contactUsSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form autoComplete="off" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Your Name
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter Your Name..."
                      className="w-full p-3 border text-slate-900 bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-300 text-sm font-semibold"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email Address
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Your Email..."
                      className="w-full p-3 border text-slate-900 bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-300 text-sm font-semibold"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium">
                      Phone Number
                    </label>
                    <Field
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter Your Phone Number..."
                      className="w-full p-3 border text-slate-900 bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-300 text-sm font-semibold"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 font-medium">
                      Subject
                    </label>
                    <Field
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Enter Subject..."
                      className="w-full p-3 border text-slate-900 bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out"
                    />
                    <ErrorMessage
                      name="subject"
                      component="div"
                      className="text-red-300 text-sm font-semibold"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Your Message
                    </label>
                    <Field
                      id="message"
                      name="message"
                      as="textarea"
                      placeholder="Enter Your Message..."
                      className="w-full p-3 border text-slate-900 bg-gray-100 border-gray-300 rounded-md min-h-[150px] resize-y focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-300 text-sm font-semibold"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 bg-gradient-to-br from-blue-500 to-blue-400 text-white font-semibold py-3 px-6 rounded-full hover:scale-105 hover:shadow-lg transition duration-300"
                  >
                    <i className="fas fa-paper-plane"></i>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        )}

        <div className="text-center text-xs text-gray-500 mt-6">
          &copy; {new Date().getFullYear()} Tasty Mundo AI — All rights
          reserved.
        </div>
      </div>
    ),
  };

  return (
    settings && (
      <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex items-center justify-center md:py-16 pt-10">
        <div
          ref={dialogRef}
          className="relative flex flex-col md:flex-row bg-slate-950 border border-slate-800 md:rounded-xl rounded-t-xl max-w-3xl w-full shadow-xl z-50 h-full"
        >
          <div className="flex md:hidden self-center p-[1px] md:p-[2px] rounded-full my-2 bg-slate-300 w-2/6 "></div>

          <div className="flex flex-row overflow-x-auto md:overflow-hidden gap-1 scrollbar-hide md:flex-col justify-between md:justify-start gap-y-4 md:w-3/12 bg-gray-900 md:rounded-l-xl p-2 h-fit md:h-full">
            <button
              onClick={() => setSettings(false)}
              className="flex items-center gap-1 w-fit hover:bg-slate-700 active:bg-slate-500 rounded-full text-gray-200 font-semibold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.7}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
            {/* Actions */}
            <div className="flex flex-row md:flex-col overflow-x-scroll md:overflow-hidden scrollbar-hide items-center">
              <button
                onClick={() => setSettingView("data")}
                className={`${
                  settingView === "data" && "bg-gray-800"
                } flex whitespace-nowrap text-sm flex-row md:w-full p-2 hover:bg-gray-800 active:bg-inherit rounded-xl items-center transition-all duration-100 ease-in-out`}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="size-5"
                  >
                    <path d="M12 2C7.66 2 4 3.83 4 6v12c0 2.17 3.66 4 8 4s8-1.83 8-4V6c0-2.17-3.66-4-8-4m0 2c3.68 0 5.91 1.49 6 2-.09.51-2.32 2-6 2S6.07 6.49 6 6.01C6.07 5.51 8.31 4 12 4M6 8.61C7.48 9.46 9.64 10 12 10s4.52-.55 6-1.39V10c-.07.5-2.31 2-6 2s-5.93-1.51-6-2zm0 4c1.48.85 3.64 1.39 6 1.39s4.52-.55 6-1.39V14c-.07.5-2.31 2-6 2s-5.93-1.51-6-2zM12 20c-3.69 0-5.93-1.51-6-2v-1.39c1.48.85 3.64 1.39 6 1.39s4.52-.55 6-1.39V18c-.07.5-2.31 2-6 2"></path>
                  </svg>
                </span>
                &nbsp;Data & Privacy
              </button>
              <button
                onClick={() => setSettingView("about")}
                className={`${
                  settingView === "about" && "bg-gray-800"
                } flex whitespace-nowrap items-center text-sm flex-row md:w-full p-2 hover:bg-gray-800 active:bg-inherit rounded-xl transition-all duration-100 ease-in-out`}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="size-5"
                  >
                    <path d="m17.13,5.54c-.8-2.12-2.81-3.54-5.13-3.54s-4.33,1.42-5.13,3.54c-2.74.31-4.87,2.65-4.87,5.46,0,2.07,1.18,3.95,3,4.88v2.12c0,.55.45,1,1,1h12c.55,0,1-.45,1-1v-2.12c1.82-.93,3-2.81,3-4.88,0-2.82-2.13-5.15-4.87-5.46Zm.53,8.75c-.4.14-.67.52-.67.94v1.78H7v-1.78c0-.42-.27-.8-.67-.94-1.4-.5-2.33-1.82-2.33-3.28,0-1.93,1.57-3.5,3.42-3.5.04,0,.14.01.18.02.49,0,.9-.31,1-.78.36-1.61,1.76-2.73,3.41-2.73s3.05,1.12,3.41,2.73c.1.47.51.81,1,.78.06,0,.12,0,.09-.01,1.93,0,3.5,1.57,3.5,3.5,0,1.47-.94,2.79-2.33,3.28Z"></path>
                    <path d="M5 20H19V22H5z"></path>
                  </svg>
                </span>
                &nbsp;About App
              </button>
            </div>
          </div>
          <div className="md:w-9/12 bg-gray-800 md:rounded-r-xl p-2 md:p-4 h-full overflow-y-auto">
            {/* Header */}
            <div className="flex flex-col flex-nowrap gap-y-2">
              <h3 className="text-lg">
                {settingsTitles[settingView] || "Settings"}
              </h3>
              <div className="bg-gray-500 h-[0.2px] mb-2 md:mb-0"></div>
            </div>
            {/* Setting Views */}
            {settingsComponents[settingView] || (
              <div>Choose a Setting to Preview</div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default SiteSettings;
