import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import HomePage from "../../Pages/HomePage/HomePage";
import SearchPage from "../../Pages/SearchPage/SearchPage";
import CompanyPage from "../../Pages/CompanyPage/CompanyPage";
import CompanyProfile from "../CompanyProfile/CompanyProfile";
import IncomeStatement from "../IncomeStatement/IncomeStatement";
import DesignPage from "../../Pages/DesignPage/DesignPage";
import BalanceSheet from "../BalanceSheet/BalanceSheet";
import CashflowStatement from "../CashflowStatement/CashflowStatement";

export const router = createBrowserRouter([
    {
        path: "/",
        element : <App />,
        children : [
            {path: "", element:<HomePage />},
            {path: "search", element:<SearchPage />},
            {path: "design-guide", element:<DesignPage />},
            {path: "company/:ticker",
                 element:<CompanyPage />,
                children:[
                    {path: "company-profile", element:<CompanyProfile />},
                    {path : "income-statement", element: <IncomeStatement  />},
                    {path : "balance-sheet", element: <BalanceSheet  />},
                    {path : "cashflow-statement", element: <CashflowStatement  />}
                ]},
            
        ]
    }
])

