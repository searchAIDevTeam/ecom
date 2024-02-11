import React from 'react'

const Cookies = () => {
    const [modal, setModal] = React.useState(false);

    return (
        <div>
            <button onClick={() => setModal(true)} className="bg-blue-400">
                Button
            </button>
            {modal && (
                <div className=" bg-gray-900 bg-opacity-30  fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                    <div className="  w-3/4 h-6/6  flex flex-col justify-between  gap-4 bg-white rounded-3xl p-7 z-50">
                        <h1 className='font-bold text-2xl'>You have complete control of your cookies</h1>
                        <p>Inter Ayatrio Systems B.V. uses cookies on this site. Some are strictly necessary to run the site but the following are optional:</p>
                        <ul className='list-none'>
                            <li>Cookies for measuring how the site is used</li>
                            <li>Cookies for enabling personalisation of the site</li>
                            <li>Cookies for advertising, marketing and social media</li>
                        </ul>
                        <div>
                            The above cookies may transfer your information to 3rd parties, some of whom are in the U.S., where your personal data
                            is not as well protected as within the EU. If you accept these cookies, you consent to your data being transferred to the U.S.
                            and accept the associated risks of U.S. governmental agencies having access to your data. We strive to limit these risks  by e.g.,
                            pseudonymising your personal data. Click "Cookie settings" to customise or withdraw your consent. Learn more in our Cookie statement.
                        </div>
                        <div className='flex flex-row justify-between my-8'>
                            <div className='border border-black p-2 rounded-full'>
                                <button>Cookie settings</button>
                            </div>
                            <div>
                                <div className='flex flex-row'>
                                    <div className='border border-black p-2 rounded-full bg-black text-white mr-3'>
                                        <button>Only necessary</button>
                                    </div>
                                    <div className='border border-black p-2 rounded-full bg-black text-white'>
                                        <button>Accept all</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setModal(false)}>close</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cookies
