export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  APP_ID: "wxe71b3921e1f81bcb",

  // 公众号APP_SECRET
  APP_SECRET: "3598d13116586d3df85e33b131d7e1ba",
  

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
   * [
   *  {
   *    // 想要发送的人的名字
   *    name: "",
   *    // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
   *    id: "ohxOO6VskYv0Kuf-ywIZVRMpuXhk",
   *    // 你想对他发送的模板消息的模板ID
   *    useTemplateId: "zjVglIuCXo4CsraXWEio1iP7sZJ7IQEES9lDsgc4yOU",
   *    // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
   *    openUrl: "https://wangxinleo.cn"
   *   }, 
   * ]
   */
  USERS: [otG7a6Z7dJ8QicgXALItbHtp6cu8
    {
      // 想要发送的人的名字
      name: "果果",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "otG7a6Z7dJ8QicgXALItbHtp6cu8",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "tPFeHFqizG19DRCNCb1UnP84QZnkxjJHXuRfDxwwRlc",
      // 所在省份
      province: "江苏",
      // 所在城市
      city: "无锡",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://www.bilibili.com"
      }
    
    
  ],

  /**
   * 回调消息 相关，主要用来展示发送是否成功/失败的数据
   */

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "tPFeHFqizG19DRCNCb1UnP84QZnkxjJHXuRfDxwwRlc",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "otG7a6fUCnh4ltwvPfoeuBLikEtY",
    }, 
  ],
    
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "江苏",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "无锡",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   */
  FESTIVALS: [
    {"type": "生日", "name": "果果的生日", "year": "2004", "date": "06-12"},
    
    {"type": "生日", "name": "兔兔的生日", "year": "1996", "date": "09-28"},
    
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字; 
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 0,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }} 
    * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "梦开始的地方", date: "2022-09-03"},
    // 结婚纪念日
    {"keyword": "起来了吗", date: "再眯一会就起来了哦"},
    // 退伍日, 不用可以删掉
    {"keyword": "今天也是和你一起努力的一天呢", date: "：>"},
    // sakana日
    {"keyword": "出门不要忘记带钥匙哦", date: "还有看看下雨了没有"},
    // ... 
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "dayup", contents: "少想一点，多做一点啦"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "遇见你，就好像捡到了100斤的运气",
      "今天也是可可爱爱的小果果，诶嘿",
      "每天都要开开心心一点啦，兔兔说的",
      "知世俗而不世故，愿你归来仍是少年",
      "mua mua mua mua mua muaaaaaaaaaaa",
      "我日三省吾身，早上吃啥，中午吃啥，晚上吃啥",
      "不要抱怨，抱我",
      "不要吃亏，吃我",
      "而你是真正鲜活的月亮，不论阴晴圆缺，我都爱你",
      "嘿咻~！戳你狗头",
      "人烟稀少的港口总是开满鲜花，正如我爱你",
      "其他一切都只是掩埋在泥土里的足迹，只等你在花开时分如期而至",
      "最喜欢你啦",
    ]},
  ],

  /** 每日一言 */

  
  



