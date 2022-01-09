import React from "react";


export default function Form() {
    return (
        <section>
            <div>
                <form className="searchBar">
                    <input type="text" placeholder="search city"></input>
                    <input type="submit" value="search"></input>
                </form>
            </div>
        </section>
    );
}