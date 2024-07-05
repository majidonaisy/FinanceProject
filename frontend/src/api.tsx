import axios from "axios"
import { CompanyBalanceSheet, CompanyCashFlow, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./company"

interface SearchResponse{
    data:CompanySearch[]
}



export const searchCompanies = async (query : string ) =>{
    try{
        const data = await axios.get<SearchResponse>(`https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=dutMMtkjvbUSwssuzjtRvgYGLo1R6NSM`);
        return data;
    }catch(err){
        if(axios.isAxiosError(err)){
            console.log(err.message);
            return err.message;
        }else{
            return "Unexpected Error"
        }
    }
}

export const getCompanyProfile = async (query: string) =>{
    try {
        const data  = await axios.get<CompanyProfile[]>(
            `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=dutMMtkjvbUSwssuzjtRvgYGLo1R6NSM`
        ) 
        return data;
    
    }catch(error : any){
        console.log("error message from API: ",error.message);
    }
}

export const getKeyMetrics = async (query: string) =>{
    try {
        const data  = await axios.get<CompanyKeyMetrics[]>(
            `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=dutMMtkjvbUSwssuzjtRvgYGLo1R6NSM`
        ) 
        return data;
    
    }catch(error : any){
        console.log("error message from API: ",error.message);
    }
}

export const getIncomeStatement = async (query: string) =>{
    try {
        const data  = await axios.get<CompanyIncomeStatement[]>(
            `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=40&apikey=dutMMtkjvbUSwssuzjtRvgYGLo1R6NSM`
        ) 
        return data;
    
    }catch(error : any){
        console.log("error message from API: ",error.message);
    }
}

export const getBalanceSheet = async (query: string) => {
    try {
      const data = await axios.get<CompanyBalanceSheet[]>(
        `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=20&apikey=dutMMtkjvbUSwssuzjtRvgYGLo1R6NSM`
      );
      return data;
    } catch (error: any) {
      console.log("error message: ", error.message);
    }
  };

  export const getCashflowStatement = async (query: string) => {
    try {
      const data = await axios.get<CompanyCashFlow[]>(
        `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=100&apikey=dutMMtkjvbUSwssuzjtRvgYGLo1R6NSM`
      );
      return data;
    } catch (error: any) {
      console.log("error message: ", error.message);
    }
  };

