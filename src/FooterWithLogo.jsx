import Logo_ista from "/logo-circle.png";

export default function FooterWithLogo() {
  const date = new Date();

  return (
    <footer className="bg-white dark:bg-gray-900">
      
      <div className="mx-auto w-4/5 max-w-screen-xl p-4 py-6 lg:py-8 ">
       
       <div className="md:flex md:justify-between ">
     
          <div className="mb-6 md:mb-0 ">
            <div className=" md:w-4/5 pt-0  flex justify-center items-center">
              <img
                src={Logo_ista}
                className="me-3 w-1/3"
              />
            </div>
           
            <div className=" md:w-4/5 text-center text-gray-700 text-xl font-semibold font-['Langar'] ">
              Centre de Formation Khemisset
            </div>
          </div>

        
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
       
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {date.getFullYear()}{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              CF Khemisset
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-4 h-4"
                viewBox="0 0 16 12"
                fill="currentColor"
              >
                <path
                  d="M15.5542 2.61093C15.3795 1.93345 14.8648 1.3999 14.2113 1.21883C13.0267 0.889801 8.27664 0.889801 8.27664 0.889801C8.27664 0.889801 3.52662 0.889801 2.34201 1.21883C1.68847 1.39993 1.17375 1.93345 0.99905 2.61093C0.681641 3.83889 0.681641 6.40092 0.681641 6.40092C0.681641 6.40092 0.681641 8.96294 0.99905 10.1909C1.17375 10.8684 1.68847 11.3797 2.34201 11.5608C3.52662 11.8898 8.27664 11.8898 8.27664 11.8898C8.27664 11.8898 13.0267 11.8898 14.2113 11.5608C14.8648 11.3797 15.3795 10.8684 15.5542 10.1909C15.8716 8.96294 15.8716 6.40092 15.8716 6.40092C15.8716 6.40092 15.8716 3.83889 15.5542 2.61093ZM6.72311 8.72704V4.07479L10.6932 6.40097L6.72311 8.72704Z"
                  fill="#6B7280"
                />
              </svg>
              <span className="sr-only">Youtube community</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white  ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 15 15"
                fill="currentColor"
              >
                <path
                  d="M7.50167 3.65419C5.3734 3.65419 3.65672 5.37125 3.65672 7.5C3.65672 9.62875 5.3734 11.3458 7.50167 11.3458C9.62995 11.3458 11.3466 9.62875 11.3466 7.5C11.3466 5.37125 9.62995 3.65419 7.50167 3.65419ZM7.50167 10.0003C6.12633 10.0003 5.00195 8.879 5.00195 7.5C5.00195 6.121 6.12298 4.99972 7.50167 4.99972C8.88037 4.99972 10.0014 6.121 10.0014 7.5C10.0014 8.879 8.87702 10.0003 7.50167 10.0003ZM12.4007 3.49688C12.4007 3.99559 11.9992 4.3939 11.5039 4.3939C11.0053 4.3939 10.6071 3.99225 10.6071 3.49688C10.6071 3.00151 11.0086 2.59985 11.5039 2.59985C11.9992 2.59985 12.4007 3.00151 12.4007 3.49688ZM14.9473 4.40729C14.8904 3.20568 14.616 2.1413 13.7359 1.26436C12.8592 0.387426 11.795 0.112964 10.5937 0.0527167C9.35555 -0.0175722 5.64445 -0.0175722 4.4063 0.0527167C3.20831 0.109617 2.14417 0.384079 1.26408 1.26102C0.383993 2.13796 0.112939 3.20233 0.052705 4.40394C-0.0175683 5.64236 -0.0175683 9.35429 0.052705 10.5927C0.109593 11.7943 0.383993 12.8587 1.26408 13.7356C2.14417 14.6126 3.20496 14.887 4.4063 14.9473C5.64445 15.0176 9.35555 15.0176 10.5937 14.9473C11.795 14.8904 12.8592 14.6159 13.7359 13.7356C14.6127 12.8587 14.8871 11.7943 14.9473 10.5927C15.0176 9.35429 15.0176 5.64571 14.9473 4.40729ZM13.3477 11.9215C13.0867 12.5775 12.5814 13.083 11.9222 13.3474C10.935 13.739 8.59258 13.6486 7.50167 13.6486C6.41076 13.6486 4.06497 13.7356 3.08115 13.3474C2.42526 13.0863 1.91997 12.5809 1.65561 11.9215C1.26408 10.9341 1.35443 8.59115 1.35443 7.5C1.35443 6.40885 1.26743 4.06253 1.65561 3.07849C1.91662 2.42246 2.42192 1.91705 3.08115 1.65263C4.06832 1.26102 6.41076 1.35139 7.50167 1.35139C8.59258 1.35139 10.9384 1.26436 11.9222 1.65263C12.5781 1.9137 13.0834 2.41911 13.3477 3.07849C13.7393 4.06588 13.6489 6.40885 13.6489 7.5C13.6489 8.59115 13.7393 10.9375 13.3477 11.9215Z"
                  fill="#6B7280"
                />
              </svg>
              <span className="sr-only">Instagram account</span>
            </a>
          </div>
        </div>
      </div>


    </footer>
  );
}
