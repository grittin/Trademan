import axios from "axios";
import { ref } from "vue";
// import {callauthen} from "./authen";
// import {callapi} from "./service";

let apiUrl = "https://demotrade.efintradeplus.com/efinTrade.TradeManAPI.DEV/api/webtrade/WebTradeRequest";
let authenkey: any

const authens = ref("");
const callapi = async () => {
    
        if (!authenkey) {
            if (apiUrl) {
                const request = {
                    WebMethod: "USERAUTHEN",
                    Data: {
                        UserId: "98-Grittin",
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

                const res = await axios
                    .post(apiUrl, request);
                
                    authenkey = res.data.AuthenInfo.AuthenKey;
                    authens.value = authenkey;

                    
            }
        }
        return authenkey;
    
}

const loadallinformation = async () => {
    
        await callapi();
        const loadallinformationRequest = {
            WebMethod: "loadallinformation",
            Data: "",
            AuthenKey: authens.value,
        };

        const res = await axios
            .post(apiUrl, loadallinformationRequest);
            return res.data;
    
}

const loadstockinformation = async (Stock: string) => {
    
        await callapi();
        const loadstockinformationRequest = {
            WebMethod: "loadstockinformation",
            Data: { StockNumber: Stock, 
                    TickerRow: 1000 },
            AuthenKey: authens.value,
        };

        const res = await axios
            .post(apiUrl, loadstockinformationRequest);
            return res.data;
    
}

export { loadstockinformation, loadallinformation };




// const loadallinformation = () => {
   
//     // const authenkey = callauthen();
//     // console.log(authenkey);
//     const loadallinformationRequest = {
//         WebMethod: "loadallinformation",
//         Data: "",
//         AuthenKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI5OC1ncml0dGluIiwiU2Vzc2lvbklkIjoiMyIsIlZlcmlmeTJGQSI6dHJ1ZSwiSXMxVGltZVRva2VuIjoiRmFsc2UiLCJuYmYiOjE3MDU2MzA4MTgsImV4cCI6MTcwNTcxNzIxOCwiaWF0IjoxNzA1NjMwODE4fQ.IF_Qb0fPaVGew28iNb_OIf2m52HDU1PQF5ChYAy5634",
//     };
//     return callapi(loadallinformationRequest).then((res: any) =>{
//         console.log(res);
//         return res
//     })
// }

// const loadstockinformation = (Stock: string) => {
//     // const authenkey = callauthen();
//     // console.log(authenkey);
//     const loadstockinformationRequest = {
//         WebMethod: "loadstockinformation",
//         Data: {StockNumber: Stock,
//                TickerRow: 5},
//         AuthenKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI5OC1ncml0dGluIiwiU2Vzc2lvbklkIjoiMyIsIlZlcmlmeTJGQSI6dHJ1ZSwiSXMxVGltZVRva2VuIjoiRmFsc2UiLCJuYmYiOjE3MDU2MzA4MTgsImV4cCI6MTcwNTcxNzIxOCwiaWF0IjoxNzA1NjMwODE4fQ.IF_Qb0fPaVGew28iNb_OIf2m52HDU1PQF5ChYAy5634",
        
//     };
//     return callapi(loadstockinformationRequest).then((res: any)=> {
//         console.log(res);
        
//         return res
//     })
// }

// const searchstockbysymbol = (symbol: string) => {
//     const searchstockbysymbolRequest = {
//         WebMethod: "searchstockbysymbol",
//         Data: {SymbolList: symbol,
//                 SortBy: "",
//                 ViewType: ""},
//         AuthenKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI5OC1ncml0dGluIiwiU2Vzc2lvbklkIjoiMjUiLCJWZXJpZnkyRkEiOnRydWUsIklzMVRpbWVUb2tlbiI6IkZhbHNlIiwibmJmIjoxNzA0OTYyMzM0LCJleHAiOjE3MDUwNDg3MzQsImlhdCI6MTcwNDk2MjMzNH0.uusUQCQLPaUVksklS2EUWbPj169I-MSfhfDIMyeMW8k",
//     };
//     return callapi(searchstockbysymbolRequest).then((res: any)=> {
//         return res
//     })
// }

// const trademanapi = async () => {
//     try {
        // const authenkey = await serviceapi();
        // // if (authenKey === undefined) {
        // //     throw new Error("AuthenKey is undefined");
        // // }
        // const loadallinformationRequest = {
        //     WebMethod: "loadallinformation",
        //     Data: "",
        //     AuthenKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI5OC1ncml0dGluIiwiU2Vzc2lvbklkIjoiMzQwIiwiVmVyaWZ5MkZBIjp0cnVlLCJJczFUaW1lVG9rZW4iOiJGYWxzZSIsIm5iZiI6MTcwNDc4NDA1MSwiZXhwIjoxNzA0ODcwNDUxLCJpYXQiOjE3MDQ3ODQwNTF9.bnD0e0qXqVcaUma1_HGG1rgmFQOfoe832pfaTH20UlY",
        // };

        // const loadstockinformationRequest = {
        //     WebMethod: "loadstockinformation",
        //     Data: {StockNumber: "65626",
        //            TickerRow: 5},
        //     AuthenKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI5OC1ncml0dGluIiwiU2Vzc2lvbklkIjoiMzQwIiwiVmVyaWZ5MkZBIjp0cnVlLCJJczFUaW1lVG9rZW4iOiJGYWxzZSIsIm5iZiI6MTcwNDc4NDA1MSwiZXhwIjoxNzA0ODcwNDUxLCJpYXQiOjE3MDQ3ODQwNTF9.bnD0e0qXqVcaUma1_HGG1rgmFQOfoe832pfaTH20UlY",
        // };

        // const searchstockbysymbolRequest = {
        //     WebMethod: "searchstockbysymbol",
        //     Data: {SortBy: "65626",
        //            TickerRow: 5},
        //     AuthenKey: authenkey,
        // };

        

        // let apiUrl = "https://demotrade.efintradeplus.com/efinTrade.TradeManAPI.DEV/api/webtrade/WebTradeRequest";
        // const loadallres = await axios
        //     .post(apiUrl, loadallinformationRequest);
        //         const stockInformationData = loadallres.data.StockInformation;
        //         const sectorinformationData = loadallres.data.SectorInformation;
        //         const marketstatusData = loadallres.data.MarketStatus;
                // console.log("Stock Information Data:", stockInformationData);
                // console.log("Sector Information Data:", sectorinformationData);
                // console.log("Market Status Data:", marketstatusData);
            
        // const loadstockres = await axios
        //     .post(apiUrl, loadstockinformationRequest);
        //         const stockinfoData = loadstockres.data.StockInfo;
        //         const bestbidofferData = loadstockres.data.BestBidOffer;
        //         const lastsaleData = loadstockres.data.Lastsale;
                // console.log("Stock Info Data:", stockinfoData);
                // console.log("Best Bid Data:", bestbidofferData);
                // console.log("Last sale Data:", lastsaleData);
        
//                 const loadinformationData = {
//                     stockInformationData,
//                     sectorinformationData,
//                     marketstatusData
//                 }
//                 const stockinformationData = {
//                     stockinfoData,
//                     bestbidofferData,
//                     lastsaleData
//                 }
//                 console.log(stockinformationData)

//             return {loadinformationData,stockinformationData}

//     } catch (error) {
//         console.error("Error:", error);
//     }
// };
// const authens = ref("")
// console.log(authens);
// const callapi = async () => {
//     if (apiUrl){
//         const request = {
//            WebMethod: "USERAUTHEN",
//            Data: {
//                UserId: "98-Grittin",
//                Password: "1234",
//                VersionCode: "1.0.0",
//                Channel: "EFIN",
//                TerminalId: "W",
//                DeviceInfo: {
//                    LocalIp: "2C84DA2D52DD8C9A07CC6528936F1408OR",
//                    DeviceId: "84976624E3938404116D9EF75E534CAC",
//                    DeviceName: "ios",
//                    DeviceModel: "91E5595EDD7C378DF55BA163EF13F340",
//                    UserAgent: "Googlebot/2.1 (+http://www.google.com/bot.html)"
//                 }
//             }
//        };
//         return await axios
//             .post(apiUrl, request)
//             .then((res: any) => {
//                 const authenkey = res.data.AuthenInfo.AuthenKey
//                                 // return res.data;
                                
//                             //   console.log(authenkey);
                            
//                   authens.value = authenkey
                 
                 
                    
//             })
//             .catch ((error: any) => {
//                 return error;
//             })
//         }
// }

// let apiUrl = "https://demotrade.efintradeplus.com/efinTrade.TradeManAPI.DEV/api/webtrade/WebTradeRequest";
// const loadallinformation = async () => {

//     // const authenkey = callapi();
//     // console.log(authenkey);
//     const loadallinformationRequest = {
//         WebMethod: "loadallinformation",
//         Data: "",
//         AuthenKey: authens,
//     };
//         return await axios 
//         .post(apiUrl, loadallinformationRequest)
//         .then((res: any) =>{
//             console.log(res);

//             return res.data
//     })
// }

// const loadstockinformation = async (Stock: string) => {
//     // const authenkey = callapi();
//     // // console.log(authenkey);
//     const loadstockinformationRequest = {
//         WebMethod: "loadstockinformation",
//         Data: {StockNumber: Stock,
//                TickerRow: 5},
//         AuthenKey: authens,
        
//     };
//         return await axios 
//         .post(apiUrl, loadstockinformationRequest)
//         .then((res: any)=> {
//             console.log(res);
            
//             return res.data
//     })
// }


// export { loadstockinformation, loadallinformation};

// const authens = ref("");

// const callapi = async () => {
//     try {
//         if (apiUrl) {
//             const request = {
//                 WebMethod: "USERAUTHEN",
//                 Data: {
//                     UserId: "98-Grittin",
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

//             const response = await axios.post(apiUrl, request);
//             const authenkey = response.data.AuthenInfo.AuthenKey;
//             authens.value = authenkey;
//             return authenkey;
//         }
//     } catch (error) {
//         console.error("Error in callapi:", error.response ? error.response.data : error.message);
//         throw error;
//     }
// }

// let apiUrl = "https://demotrade.efintradeplus.com/efinTrade.TradeManAPI.DEV/api/webtrade/WebTradeRequest";

// const loadallinformation = async () => {
//     try {
//         await callapi(); // Wait for authentication before making other requests
//         const loadallinformationRequest = {
//             WebMethod: "loadallinformation",
//             Data: "",
//             AuthenKey: authens.value, // Use authens.value
//         };

//         const response = await axios.post(apiUrl, loadallinformationRequest);
//         console.log(response);
//         return response.data;
//     } catch (error) {
//         console.error("Error in loadallinformation:", error.response ? error.response.data : error.message);
//         throw error;
//     }
// }

// const loadstockinformation = async (Stock: string) => {
//     try {
//         await callapi(); // Wait for authentication before making other requests
//         const loadstockinformationRequest = {
//             WebMethod: "loadstockinformation",
//             Data: { StockNumber: Stock, TickerRow: 5 },
//             AuthenKey: authens.value, // Use authens.value
//         };

//         const response = await axios.post(apiUrl, loadstockinformationRequest);
//         console.log(response);
//         return response.data;
//     } catch (error) {
//         console.error("Error in loadstockinformation:", error.response ? error.response.data : error.message);
//         throw error;
//     }
// }

// export { loadstockinformation, loadallinformation };