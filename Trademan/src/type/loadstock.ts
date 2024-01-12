export type TStockinfo ={
    Average: string,
    BoardLot: string,
    BuyVolume: string,
    BuyVolumePct: string,
    Ceiling: string,
    ChangePrice: string,
    ChangePricePct: string,
    CmprPct: string,
    ComparePrice: string, 
    Flag: string,
    Floor: string,
    High52: string,
    HighPrice: string,
    IM: string,
    LastSalePrice: string,
    Low52: string,
    LowPrice: string,
    MarketId: string,
    Open1: string,
    Open2: string,
    OpenVolume: string,
    OpenVolumePct: string,
    OrderbookState: string,
    Par: string,
    PriorClosePrice: string,
    ProjectedClose: string,
    ProjectedVolume: string,
    SectorNumber: string,
    SellVolume: string,
    SellVolumePct: string,
    StockFullName: string,
    StockNumber: string,
    StockSymbol: string,
    StockType: string,
    TotalValue: string,
    TotalValueUnitFormat: string,
    TotalVolume: string,
    TotalVolumeUnitFormat: string,
    WarrantExpire: string,
}
export type TLastsale ={
    Price: string,
    Side: string,
    Volume: string,
    DisplayTime: string,
    TimeStamp: string
}

export type TBestbidoffer ={
    BidPrice1: string,
    BidVolume1: string,
    BidTotal1: string,
    BidPrice2: string,
    BidVolume2: string,
    BidTotal2: string,
    BidPrice3: string,
    BidVolume3: string,
    BidTotal3: string,
    BidPrice4: string,
    BidVolume4: string,
    BidTotal4: string,
    BidPrice5: string,
    BidVolume5: string,
    BidTotal5: string,
    BidPrice6: string,
    BidVolume6: string,
    BidTotal6: string,
    BidPrice7: string,
    BidVolume7: string,
    BidTotal7: string,
    BidPrice8: string,
    BidVolume8: string,
    BidTotal8: string,
    BidPrice9: string,
    BidVolume9: string,
    BidTotal9: string,
    BidPrice10: string,
    BidVolume10: string,
    BidTotal10: string,
    OfferPrice1: string,
    OfferVolume1: string,
    OfferTotal1: string,
    OfferPrice2: string,
    OfferVolume2: string,
    OfferTotal2: string,
    OfferPrice3: string,
    OfferVolume3: string,
    OfferTotal3: string,
    OfferPrice4: string,
    OfferVolume4: string,
    OfferTotal4: string,
    OfferPrice5: string,
    OfferVolume5: string,
    OfferTotal5: string,
    OfferPrice6: string,
    OfferVolume6: string,
    OfferTotal6: string,
    OfferPrice7: string,
    OfferVolume7: string,
    OfferTotal7: string,
    OfferPrice8: string,
    OfferVolume8: string,
    OfferTotal8: string,
    OfferPrice9: string,
    OfferVolume9: string,
    OfferTotal9: string,
    OfferPrice10: string,
    OfferVolume10: string,
    OfferTotal10: string
}

export type TStockInformation ={
    StockNumber: string,
    StockSymbol: string,
    StockFullName: string,
    Ceiling: string,
    Floor: string,
    PriorClosePrice: string,
    SectorNumber: string,
    BoardLot: number,
    StockType: string,
    MarketId: string,
    LastSalePrice: string,
    ChangePrice: string,
    ChangePricePct: string,
    Average: null,
    BidPrice1: null,
    OfferPrice1: null,
    HighPrice: string,
    LowPrice: string,
    ProjectedPrice: string,
    Logo: null,
    Flag: string,
}

export type TStockInfoStat ={
    StockNumber: string,
    StockSymbol: string,
    StockFullName: string,
    Ceiling: string,
    Floor: string,
    PriorClosePrice: string,
    LastSalePrice: string,
    ChangePrice: string,
    ChangePricePct: string,
    Average: string,
    ProjectedPrice: string,
    ProjectedVolume: string,
    ProjectedVolumeUnitFormat: string,
    TotalValue: string,
    TotalValueUnitFormat: string,
    TotalVolume: string,
    TotalVolumeUnitFormat: string,
    MarketId: string,
    SectorNumber: string,
    IsFavorite: string,
    Flag: string,
}