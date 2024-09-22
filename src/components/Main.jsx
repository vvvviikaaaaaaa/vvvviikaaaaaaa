import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Middle from "./Middle";

function Main() {
    return(
        <table border="1" width="100%">
            <thead>
                <tr>
                    <th colSpan="2">
                        <Header/>
                    </th>
                </tr>
            </thead>
            <tbody>
                <Middle />
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="2">
                        <Footer/>
                    </td>
                </tr>
            </tfoot>
        </table>
    );
}

export default Main;
