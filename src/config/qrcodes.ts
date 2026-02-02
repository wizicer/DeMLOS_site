export interface QRCodeConfig {
  primary: {
    content: string;
    expiryDate: string;
    centerIcon?: string;
  };
  secondary: {
    content: string;
    centerIcon?: string;
  };
}

export const qrCodes: Record<string, QRCodeConfig> = {
  wechat: {
    primary: {
      content:
        "https://weixin.qq.com/g/AQYAALU2Hv9GpQuU4AI1y0jJYdQVnXCuDaoWXQ93BMru73hlKFaEvKCTmY271nem",
      expiryDate: "2026-02-09",
      centerIcon: "👥",
    },
    secondary: {
      content: "https://u.wechat.com/EJeeSDEiyjGrTSaDnVPjaeo?s=2",
      centerIcon: "💬",
    },
  },
};
