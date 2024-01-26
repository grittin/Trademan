// import axios from "axios";

// const callapi = async (request: any) => {
//         let apiUrl = "https://demotrade.efintradeplus.com/efinTrade.TradeManAPI.DEV/api/webtrade/WebTradeRequest"
//             return await axios
//                 .post(apiUrl, request)
//                 .then((res: any) => {
//                     return res.data;
//                 })
//                 .catch ((error: any) => {
//                     return error;
//                 })
//             }
              
// export {
//     callapi
// }


// import axios from "axios";

//  const callapi = async () => {
//         let apiUrl = "https://demotrade.efintradeplus.com/efinTrade.TradeManAPI.DEV/api/webtrade/WebTradeRequest"
//         if (apiUrl){
//                      const postData = {
//                         WebMethod: "USERAUTHEN",
//                         Data: {
//                             UserId: "98-Grittin",
//                             Password: "1234",
//                             VersionCode: "1.0.0",
//                             Channel: "EFIN",
//                             TerminalId: "W",
//                             DeviceInfo: {
//                                 LocalIp: "2C84DA2D52DD8C9A07CC6528936F1408OR",
//                                 DeviceId: "84976624E3938404116D9EF75E534CAC",
//                                 DeviceName: "ios",
//                                 DeviceModel: "91E5595EDD7C378DF55BA163EF13F340",
//                                 UserAgent: "Googlebot/2.1 (+http://www.google.com/bot.html)"
//                              }
//                          }
//                     };
//             return await axios
//                 .post(apiUrl, postData)
//                 .then((res: any) => {
//                     const authenkey = res.data.AuthenInfo.AuthenKey
//                         console.log(authenkey)
//                                     // return res.data;
//                     // return res.data;
//                 })
//                 .catch ((error: any) => {
//                     return error;
//                 })
//             } 
//         }
// export {
//     callapi
// }


// import axios from "axios";

// const serviceapi = async () => {
//     try {
//         let apiUrl = "https://demotrade.efintradeplus.com/efinTrade.TradeManAPI.DEV/api/webtrade/WebTradeRequest";

//         if (apiUrl) {
//             const postData = {
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

//             const response = await axios.post(apiUrl, postData);

       
//             console.log(response.data);

//             const authenKey = response.data.AuthenInfo?.AuthenKey;

//             if (authenKey) {
//                 return authenKey;
//             } else {
//                 throw new Error("AuthenKey not found in the API response.");
//             }
//         }
//     } catch (error) {
//         console.error("Error:", error);
//         throw error; // Rethrow the error to propagate it to the caller
//     }
// };

// export {
//     serviceapi
// };

// const serviceapi =async () => {
//     let apiUrl = "https://demotrade.efintradeplus.com/efinTrade.TradeManAPI.DEV/api/webtrade/WebTradeRequest"
//     if (apiUrl){
//         const postData = {
//             WebMethod: "USERAUTHEN",
//                 Data: {
//                 UserId: "98-Grittin",
//                 Password: "1234",
//                 VersionCode: "1.0.0",
//                 Channel: "EFIN",
//                 TerminalId: "W",
//                 DeviceInfo: {
//                     LocalIp: "2C84DA2D52DD8C9A07CC6528936F1408OR",
//                     DeviceId: "84976624E3938404116D9EF75E534CAC",
//                     DeviceName: "ios",
//                     DeviceModel: "91E5595EDD7C378DF55BA163EF13F340",
//                     UserAgent: "Googlebot/2.1 (+http://www.google.com/bot.html)"
//                 }
//             }
//         };
//         return await axios
//             .post(apiUrl, postData)
//             .then((res: any) => {
//                 const authenkey = res.data.AuthenInfo.AuthenKey
//                 console.log(authenkey)
//                 // return res.data;
//             })
//             .catch ((error: any) => {
//                 return error;
//             })
//         } 
//     };

// export {
//     serviceapi
// }


// import axios from "axios";

// const callapi = async (request: any) => {
//     let apiUrl = "https://demotrade.efintradeplus.com/efinTrade.TradeManAPI.DEV/api/webtrade/WebTradeRequest";

//     try {
//         const response = await axios.post(apiUrl, request);
//         return response.data;
//     } catch (error) {
//         return error;
//     }
// };

// const callauthen = async () => {
//     let apiUrl = "https://demotrade.efintradeplus.com/efinTrade.TradeManAPI.DEV/api/webtrade/WebTradeRequest";

//     if (apiUrl) {
//         const postData = {
//             WebMethod: "USERAUTHEN",
//             Data: {
//                 UserId: "98-Grittin",
//                 Password: "1234",
//                 VersionCode: "1.0.0",
//                 Channel: "EFIN",
//                 TerminalId: "W",
//                 DeviceInfo: {
//                     LocalIp: "2C84DA2D52DD8C9A07CC6528936F1408OR",
//                     DeviceId: "84976624E3938404116D9EF75E534CAC",
//                     DeviceName: "ios",
//                     DeviceModel: "91E5595EDD7C378DF55BA163EF13F340",
//                     UserAgent: "Googlebot/2.1 (+http://www.google.com/bot.html)"
//                 }
//             }
//         };
    
//         try {
//             const response = await axios.post(apiUrl, postData);
//             const authenkey = response.data.AuthenInfo.AuthenKey;
//             console.log(authenkey);
//         } catch (error) {
//             return error;
//         }
//     }
// };

// export { callapi, callauthen };


// import axios from "axios";

// const callapi = async () => {
//         let apiUrl = "https://demotrade.efintradeplus.com/efinTrade.TradeManAPI.DEV/api/webtrade/WebTradeRequest"
//         if (apiUrl){
//             const request = {
//                WebMethod: "USERAUTHEN",
//                Data: {
//                    UserId: "98-Grittin",
//                    Password: "1234",
//                    VersionCode: "1.0.0",
//                    Channel: "EFIN",
//                    TerminalId: "W",
//                    DeviceInfo: {
//                        LocalIp: "2C84DA2D52DD8C9A07CC6528936F1408OR",
//                        DeviceId: "84976624E3938404116D9EF75E534CAC",
//                        DeviceName: "ios",
//                        DeviceModel: "91E5595EDD7C378DF55BA163EF13F340",
//                        UserAgent: "Googlebot/2.1 (+http://www.google.com/bot.html)"
//                     }
//                 }
//            };
//             return await axios
//                 .post(apiUrl, request)
//                 .then((res: any) => {
//                     const authenkey = res.data.AuthenInfo.AuthenKey
//                                     // return res.data;
                                    
//                                 //   console.log(authenkey);
                                  
//                         return authenkey;
                        
//                 })
//                 .catch ((error: any) => {
//                     return error;
//                 })
//             }
// }    


// export {
//     callapi
// }