// import axios from "axios";

//  const callauthen = async () => {
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
//                                     // return res.data;
//                         return authenkey;   
//                 })
//                 .catch ((error: any) => {
//                     return error;
//                 })
//             } 
            
//         }
// export {
//     callauthen
// }
