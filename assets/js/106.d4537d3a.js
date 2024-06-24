(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{647:function(t,e,a){"use strict";a.r(e);var s=a(6),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"restconfreq"}},[t._v("RestConfReq")]),t._v(" "),a("h3",{attrs:{id:"概述"}},[t._v("概述：")]),t._v(" "),a("p",[t._v("添加会议需提供的信息")]),t._v(" "),a("p",[a("strong",[t._v("参数说明")]),t._v("：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("必选")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("会议名字")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("numericId")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("会议号")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("numericIdAlias")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("会议别号")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("会议类型，"),a("RouterLink",{attrs:{to:"/会捷通API/50-会议管控/10.数据资源/5.枚举ConfType.html"}},[t._v("ConfType")])],1)]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("startTime")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",[t._v("long")]),t._v(" "),a("td",[t._v("开始时刻（毫秒），0表示该会议立即开始。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("duration")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",[t._v("long")]),t._v(" "),a("td",[t._v("时长，单位毫秒")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("callRate")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("呼叫速率，单位kbps")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("peopleQuality")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("主流能力，"),a("RouterLink",{attrs:{to:"/会捷通API/50-会议管控/10.数据资源/7.枚举PeopleQuality.html"}},[t._v("PeopleQuality")])],1)]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("contentVideoCapability")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("辅流能力，"),a("RouterLink",{attrs:{to:"/会捷通API/50-会议管控/10.数据资源/14.枚举ContentVideoCapability.html"}},[t._v("contentVideoCapability")])],1)]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("contentMode")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("辅流模式，"),a("RouterLink",{attrs:{to:"/会捷通API/50-会议管控/10.数据资源/6.枚举ContentMode.html"}},[t._v("ContentMode")])],1)]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("lecturerEpId")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("long")]),t._v(" "),a("td",[t._v("主会场终端id")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("lecturerUserId")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("long")]),t._v(" "),a("td",[t._v("主会场用户id")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("layout")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("分屏模式，"),a("RouterLink",{attrs:{to:"/会捷通API/50-会议管控/10.数据资源/2.枚举ConfLayout.html"}},[t._v("ConfLayout")])],1)]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("sameLayoutEnabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("相同分屏")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("profile")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("会议质量，"),a("RouterLink",{attrs:{to:"/会捷通API/50-会议管控/10.数据资源/3.枚举ConfProfile.html"}},[t._v("ConfProfile")])],1)]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("password")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("会议密码")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("description")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("备注")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("endpointIds")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("List"),a("Long")],1),t._v(" "),a("td",[t._v("受邀终端id列表")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("userIds")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("List"),a("Long")],1),t._v(" "),a("td",[t._v("受邀用户id列表")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("roomId")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("long")]),t._v(" "),a("td",[t._v("绑定的会议室id")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("maxPartyCount")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("最大入会人数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("maxGuestCount")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("最大嘉宾人数(研讨会专用)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("maxAudienceCount")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("最大观众人数(研讨会专用)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("onHold")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("启用等候室")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("peopleWatermarkEnabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("终端水印")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("roomSharingEnabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("会议室分享约会（可忽略）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("useRandomNumericId")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("要求后台生成随机会议号")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("redialingEnabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("启用自动重拨")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("recordingEnabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("开启录制")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("autoMutingEnabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("入会自动静音")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("warmingUpEnabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("启用暖场(研讨会专用)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("callPermission")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("呼叫许可，"),a("RouterLink",{attrs:{to:"/会捷通API/50-会议管控/10.数据资源/1.枚举CallPermission.html"}},[t._v("CallPermission")])],1)]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("recordingProfile")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("录制/直播质量，"),a("RouterLink",{attrs:{to:"/会捷通API/50-会议管控/10.数据资源/9.枚举RecordingProfile.html"}},[t._v("RecordingProfile")])],1)]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("recordingLayout")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("录制分屏，"),a("RouterLink",{attrs:{to:"/会捷通API/50-会议管控/10.数据资源/8.枚举RecordingLayout.html"}},[t._v("RecordingLayout")])],1)]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("liveStreamingUrl")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("直播推流URL")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("localLiveStreamingEnabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("是否本地直播")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("localLiveConfig")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/会捷通API/50-会议管控/10.数据资源/88.结构RestLocalLiveConfig.html"}},[t._v("RestLocalLiveConfig")])],1),t._v(" "),a("td",[t._v("本地直播配置")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("subtitle")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/会捷通API/50-会议管控/10.数据资源/72.结构RestSubtitle.html"}},[t._v("RestSubtitle")])],1),t._v(" "),a("td",[t._v("字幕设置")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("siteName")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/会捷通API/50-会议管控/10.数据资源/87.结构RestSiteName.html"}},[t._v("RestSiteName")])],1),t._v(" "),a("td",[t._v("会场名称设置")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("adminUserId")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("long")]),t._v(" "),a("td",[t._v("后备会控者的用户id")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("attachment")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/会捷通API/50-会议管控/10.数据资源/40.结构RestConfAttachment.html"}},[t._v("RestConfAttachment")])],1),t._v(" "),a("td",[t._v("附件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("parentId")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("long")]),t._v(" "),a("td",[t._v("分组大会的id")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("force11Link")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("强制会议1X1分屏")])])])]),t._v(" "),a("p",[a("strong",[t._v("示例")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test会议"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"startTime"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1673514048000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"duration"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"layout"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0X0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"profile"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SVC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"redialingEnabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"peopleWatermarkEnabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"onHold"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"recordingLayout"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"largeContentSmallPeople"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"recordingProfile"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GW_WEBCAST"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"recordingEnabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"liveStreamingUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"callRate"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2048"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"peopleQuality"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"h264_1080p30"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contentMode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VIDEO"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contentVideoCapability"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"upToH2641080p15"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"subtitle"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"on"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"displayRepetitions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"transparency"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"displaySpeed"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"foregroundColor"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#FFFF00"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"backgroundColor"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#3300CC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fontSize"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"verticalBorder"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"autoMutingEnabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"callPermission"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"adminUserId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"endpointIds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"userIds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"useRandomNumericId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"maxPartyCount"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);