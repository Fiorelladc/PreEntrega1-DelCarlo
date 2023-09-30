import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const MainLayout = ({ children }) => {
    return (
        <div>
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;