import axios from "axios";
import {callapi} from "./service";

const loadallinformation = () => {
    const loadallinformationRequest = {
        WebMethod: "loadallinformation",
        Data: "",
        AuthenKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI5OC1ncml0dGluIiwiU2Vzc2lvbklkIjoiOCIsIlZlcmlmeTJGQSI6dHJ1ZSwiSXMxVGltZVRva2VuIjoiRmFsc2UiLCJuYmYiOjE3MDUwMjY0NzQsImV4cCI6MTcwNTExMjg3NCwiaWF0IjoxNzA1MDI2NDc0fQ.Tnl9q8I4lWevkCGccyFv1zn9tMxzAUmyYE0g26ZUGKg",
    };
    return callapi(loadallinformationRequest).then((res: any) =>{
        return res
    })
}

const loadstockinformation = (Stock: string) => {
    const loadstockinformationRequest = {
        WebMethod: "loadstockinformation",
        Data: {StockNumber: Stock,
               TickerRow: 5},
        AuthenKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI5OC1ncml0dGluIiwiU2Vzc2lvbklkIjoiOCIsIlZlcmlmeTJGQSI6dHJ1ZSwiSXMxVGltZVRva2VuIjoiRmFsc2UiLCJuYmYiOjE3MDUwMjY0NzQsImV4cCI6MTcwNTExMjg3NCwiaWF0IjoxNzA1MDI2NDc0fQ.Tnl9q8I4lWevkCGccyFv1zn9tMxzAUmyYE0g26ZUGKg",
    };
    return callapi(loadstockinformationRequest).then((res: any)=> {
        return res
    })
}

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

export { loadstockinformation, loadallinformation, searchstockbysymbol};