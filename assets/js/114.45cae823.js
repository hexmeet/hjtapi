(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{657:function(t,e,a){"use strict";a.r(e);var l=a(6),v=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"会议预约api说明"}},[t._v("会议预约API说明")]),t._v(" "),a("h3",{attrs:{id:"_1-预约会议"}},[t._v("(1) 预约会议")]),t._v(" "),a("p",[a("strong",[t._v("简要描述：")])]),t._v(" "),a("ul",[a("li",[t._v("用于预约会议")])]),t._v(" "),a("p",[a("strong",[t._v("请求URL：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("/api/rest/v2.0/conferences")])])]),t._v(" "),a("p",[a("strong",[t._v("请求方式：")])]),t._v(" "),a("ul",[a("li",[t._v("POST")])]),t._v(" "),a("p",[a("strong",[t._v("请求Header:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Content-Type: application/json;charset=UTF-8\nAuthorization: Bearer {token}\n")])])]),a("p",[a("strong",[t._v("请求参数：")])]),t._v(" "),a("p",[a("strong",[t._v("请求体：")]),t._v(" "),a("RouterLink",{attrs:{to:"/会捷通API/50-会议管控/10.数据资源/90.结构RestConfReq.html"}},[t._v("RestConfReq")])],1),t._v(" "),a("p",[a("strong",[t._v("返回体：")]),t._v(" "),a("RouterLink",{attrs:{to:"/会捷通API/50-会议管控/10.数据资源/91.结构RestConf.html"}},[t._v("RestConf")])],1),t._v(" "),a("h3",{attrs:{id:"_2-获取会议列表"}},[t._v("(2) 获取会议列表")]),t._v(" "),a("p",[a("strong",[t._v("简要描述：")])]),t._v(" "),a("ul",[a("li",[t._v("用于查询会议列表")])]),t._v(" "),a("p",[a("strong",[t._v("请求URL：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("/api/rest/v2.0/conferences")])])]),t._v(" "),a("p",[a("strong",[t._v("请求方式：")])]),t._v(" "),a("ul",[a("li",[t._v("GET")])]),t._v(" "),a("p",[a("strong",[t._v("请求Header:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Content-Type: application/json;charset=UTF-8\nAuthorization: Bearer {token}\n")])])]),a("p",[a("strong",[t._v("请求参数：")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("参数名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("是否必选")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("startTime")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指定查询时间段的起始点")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("以毫秒为单位的Unix时间戳；若会议的时间段与指定的查询时间段有重叠，则该会议会出现在查询结果里。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("endTime")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指定查询时间段的结束点")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("以毫秒为单位的Unix时间戳")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("status")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("会议状态")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("可取值参见"),a("RouterLink",{attrs:{to:"/会捷通API/50-会议管控/10.数据资源/4.枚举ConfStatus.html"}},[t._v("ConfStatus")]),t._v("：若不设值，则默认返回状态为APPROVED或ONGOING的会议。")],1)]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("confType")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("会议类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/会捷通API/50-会议管控/10.数据资源/5.枚举ConfType.html"}},[t._v("ConfType")]),t._v("  e.g. SCHEDULED, INSTANT, P2P")],1)]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("confNameSlice")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("会议名称片段或会议号片段")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("agentUserId")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("客服代理id")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("orgId")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("会议所属公司id")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("deptId")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("会议申请者所在部门的ID")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("includeHierarchicalDepts")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否包含下属部门")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("值为”true”或”false”")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("includeSubconfs")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否含子会议")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("excludeNotOngoingTemplate")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("排除不在召开状态的群组")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("inviteeId")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指定受邀请者的用户ID")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当inviteeId在会议的邀请用户列表里面时，匹配上。"),a("br"),t._v("当指定了inviteeId后， 查询参数deptId、applicantId自动失效，也不会以操作本人为查询条件。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("version")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("查询大于等于此版本号的会议")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("maxResults")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("查询结果中会议数量的上限")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("用来控制查询结果的数量")])])])]),t._v(" "),a("p",[a("strong",[t._v("返回体：")]),t._v("\nList<"),a("RouterLink",{attrs:{to:"/会捷通API/50-会议管控/10.数据资源/92.结构RestConfSummary.html"}},[t._v("RestConfSummary")]),t._v(">")],1),t._v(" "),a("h3",{attrs:{id:"_3-修改已预约的会议"}},[t._v("(3) 修改已预约的会议")]),t._v(" "),a("p",[a("strong",[t._v("简要描述：")])]),t._v(" "),a("ul",[a("li",[t._v("用于修改已预约的会议")])]),t._v(" "),a("p",[a("strong",[t._v("请求URL：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("/api/rest/v2.0/conferences/{confId}")])])]),t._v(" "),a("p",[a("strong",[t._v("请求方式：")])]),t._v(" "),a("ul",[a("li",[t._v("POST")])]),t._v(" "),a("p",[a("strong",[t._v("请求参数：")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("参数名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("是否必选")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("详细描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("httpMethod")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("put")])])])]),t._v(" "),a("p",[a("strong",[t._v("请求Header:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Content-Type: application/json;charset=UTF-8\nAuthorization: Bearer {token}\n")])])]),a("p",[a("strong",[t._v("请求体：")]),t._v(" "),a("RouterLink",{attrs:{to:"/会捷通API/50-会议管控/10.数据资源/90.结构RestConfReq.html"}},[t._v("RestConfReq")])],1),t._v(" "),a("p",[a("strong",[t._v("返回体：")]),t._v(" "),a("RouterLink",{attrs:{to:"/会捷通API/50-会议管控/10.数据资源/91.结构RestConf.html"}},[t._v("RestConf")])],1),t._v(" "),a("h3",{attrs:{id:"_4-删除已预约的会议"}},[t._v("(4) 删除已预约的会议")]),t._v(" "),a("p",[a("strong",[t._v("简要描述：")])]),t._v(" "),a("ul",[a("li",[t._v("用于删除已预约的会议")])]),t._v(" "),a("p",[a("strong",[t._v("请求URL：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("/api/rest/v2.0/conferences/{confId}")])])]),t._v(" "),a("p",[a("strong",[t._v("请求方式：")])]),t._v(" "),a("ul",[a("li",[t._v("POST")])]),t._v(" "),a("p",[a("strong",[t._v("请求Header:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Content-Type: application/json;charset=UTF-8\nAuthorization: Bearer {token}\n")])])]),a("p",[a("strong",[t._v("请求参数：")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("参数名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("是否必选")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("详细描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("httpMethod")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("delete")])])])]),t._v(" "),a("p",[a("strong",[t._v("成功返回示例:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(' {\n \t"result" : "ok"\n }\n')])])])])}),[],!1,null,null,null);e.default=v.exports}}]);