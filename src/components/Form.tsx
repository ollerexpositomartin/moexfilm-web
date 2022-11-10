import React from "react";

function Form() {
    return (
        <div className="h-96 relative top-24 ">
            <h1 className="text-gray-200 text-4xl font-semibold pb-5 font-Roboto m-5">Welcome back</h1>
            <form className="mt-5 m-5  mr-10">
                <ul>
                    <li><label className="text-gray-200 font-semibold font-Roboto">Username</label></li>
                    <li className="mt-2"><input type="text" className="input input-primary input-bordered w-full"/></li>
                    <li className="mt-4"><label className="text-gray-200 font-semibold font-Roboto">Password</label></li>
                    <li className="mt-2"><input type="text"className="input input-primary input-bordered w-full "/></li>
                    <li><button className="btn btn-primary mt-5 w-full font-Roboto ">Login</button></li>
                </ul>
            </form>
        </div>
    );
}

export default Form;