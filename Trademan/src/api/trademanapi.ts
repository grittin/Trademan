import axios from "axios";
import { ref } from "vue";

let apiUrl = "https://demotrade.efintradeplus.com/efinTrade.TradeManAPI.DEV/api/webtrade/WebTradeRequest";
let newAuthenKey : any
let authenKey = localStorage.getItem("authenKey");

const authens = ref("");


const callApi = async () => {
    if(authenKey && authenKey !== "") {
        authens.value = authenKey
    } else{
        const request = {
            WebMethod: "USERAUTHEN",
            Data: {
                UserId: "98-saritphong",
                Password: "1234",
                VersionCode: "1.0.0",
                Channel: "EFIN",
                TerminalId: "W",
                DeviceInfo: {
                    LocalIp: "2C84DA2D52DD8C9A07CC6528936F1408OR",
                    DeviceId: "84976624E3938404116D9EF75E534CAC",
                    DeviceName: "ios",
                    DeviceModel: "91E5595EDD7C378DF55BA163EF13F340",
                    UserAgent: "Googlebot/2.1 (+http://www.google.com/bot.html)"
                }
            }
        };
        const res = await axios.post(apiUrl, request);
            newAuthenKey = res.data.AuthenInfo.AuthenKey;
            localStorage.setItem("authenKey", newAuthenKey);
            authens.value = newAuthenKey;
    }
}

const loadAllInformation = async () => {
    
        await callApi();
        const loadallinformationRequest = {
            WebMethod: "loadallinformation",
            Data: "",
            AuthenKey: authens.value,
        };

        const res = await axios.post(apiUrl, loadallinformationRequest);
            return res.data;
    
}

const loadStockInformation = async (Stock: string) => {
    
        await callApi();
        const loadstockinformationRequest = {
            WebMethod: "loadstockinformation",
            Data: { StockNumber: Stock, 
                    TickerRow: 1000 },
            AuthenKey: authens.value,
        };

        const res = await axios.post(apiUrl, loadstockinformationRequest);
            return res.data;
    
}

export { loadStockInformation, loadAllInformation, callApi};











// const callApi = async () => {

//     if (!authenKey) {
//         if (apiUrl) {
//             const request = {
//                 WebMethod: "USERAUTHEN",
//                 Data: {
//                     UserId: "98-saritphong",
//                     Password: "1234",
//                     VersionCode: "1.0.0",
//                     Channel: "EFIN",
//                     TerminalId: "W",
//                     DeviceInfo: {
//                         LocalIp: "2C84DA2D52DD8C9A07CC6528936F1408OR",
//                         DeviceId: "84976624E3938404116D9EF75E534CAC",
//                         DeviceName: "ios",
//                         DeviceModel: "91E5595EDD7C378DF55BA163EF13F340",
//                         UserAgent: "Googlebot/2.1 (+http://www.google.com/bot.html)"
//                     }
//                 }
//             };

//             const res = await axios
//                 .post(apiUrl, request);
            
//                 authenKey = res.data.AuthenInfo.AuthenKey;
//                 // localStorage.setItem("authenKey", authenKey);
//                 authens.value = authenKey;
//         }
//     }
//     return authenKey;
