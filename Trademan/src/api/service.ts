import axios from "axios";

 const callapi = async (request: any) => {
        let apiUrl = "https://demotrade.efintradeplus.com/efinTrade.TradeManAPI.DEV/api/webtrade/WebTradeRequest"
        
            return await axios
                .post(apiUrl, request)
                .then((res: any) => {
                 
                    return res.data;
                })
                .catch ((error: any) => {
                    return error;
                })
            } 
export {
    callapi
}

