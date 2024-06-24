(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{676:function(t,e,_){"use strict";_.r(e);var l=_(6),v=Object(l.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"历史参会查询【post】"}},[t._v("历史参会查询【POST】")]),t._v(" "),_("h5",{attrs:{id:"简要描述"}},[t._v("简要描述")]),t._v(" "),_("ul",[_("li",[t._v("会议发起人或者参会者相关的会议历史查询")])]),t._v(" "),_("h5",{attrs:{id:"请求url"}},[t._v("请求URL")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("/report/agg/parties/term_conf_stats?domainId=null")])])]),t._v(" "),_("h5",{attrs:{id:"请求方式"}},[t._v("请求方式")]),t._v(" "),_("ul",[_("li",[t._v("POST")])]),t._v(" "),_("h5",{attrs:{id:"参数"}},[t._v("参数")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("必选")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("start_time")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),_("td",[t._v("开始时间")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("end_time")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),_("td",[t._v("结束时间")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),_("td",[t._v("令牌")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("size")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),_("td",[t._v("期望返回的数据数量")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("scrollid")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),_("td",[t._v("翻页请求需要带上")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("search")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),_("td",[t._v("需要查找的内容")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),_("td",[t._v("会议类型,取值见下面的表：会议类型")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("applicantId")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),_("td",[t._v("发起人用户ID")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("attendeeId")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),_("td",[t._v("与会者用户ID,当指定了attendeeId后，查询参数applicantId自动失效。")])])])]),t._v(" "),_("h5",{attrs:{id:"会议类型"}},[t._v("会议类型")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("取值（类型为Int）")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("预约")])]),t._v(" "),_("tr",[_("td",[t._v("2")]),t._v(" "),_("td",[t._v("立即")])]),t._v(" "),_("tr",[_("td",[t._v("3")]),t._v(" "),_("td",[t._v("会议室")])]),t._v(" "),_("tr",[_("td",[t._v("4")]),t._v(" "),_("td",[t._v("群组")])]),t._v(" "),_("tr",[_("td",[t._v("5")]),t._v(" "),_("td",[t._v("P2P")])])])]),t._v(" "),_("h5",{attrs:{id:"请求示例"}},[t._v("请求示例")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('{\n    "start_time": "2022-08-06T00:00:00+08:00",\n    "end_time": "2022-08-06T23:59:59+08:00",\n    "time_zone": "+08:00",\n    "size": 200,\n    "scrollid": "",\n    "search": "",\n    "token": "42cf24943aa646149626648e9c85f4bd",\n    "applicantId": "230"  \n}\n')])])]),_("h5",{attrs:{id:"返回示例"}},[t._v("返回示例")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('{\n    "guid": "",\n    "err_code": 0,\n    "err_info": "RESULT_OK",\n    "more_info": "",\n    "total": 1,\n    "scrollid": "1659754598671",\n    "count": 1,\n    "buckets": [\n        {\n            "room_name": "会议室166",\n            "capacity": 10,\n            "endTime": "2022-08-06T10:56:38.671+08:00",\n            "department": "",\n            "department_id": 0,\n            "agent_id": 9,\n            "company_id": 11,\n            "company": "hexmeetrd",\n            "agent": "会捷通云视讯官方旗舰店",\n            "conf_guid": "8b323957dab04a528ae4ce5e245fb9aa",\n            "parent_conf_guid": "",\n            "duration": 882,\n            "startTime": "2022-08-06T10:41:56.427+08:00",\n            "error_code": 0,\n            "error_info": "",\n            "conf_number": "116439",\n            "host": "shaofeng",\n            "max_party_count": 1,\n            "conf_name": "张绍锋的测试会议",\n            "type": 2\n        }\n    ]\n}\n')])])]),_("h5",{attrs:{id:"返回参数说明"}},[t._v("返回参数说明")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("guid")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),_("td",[t._v("和请求匹配的GUID")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("err_code")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),_("td",[t._v("错误返回码")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("err_info")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),_("td",[t._v("错误描述")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("more_info")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),_("td",[t._v("扩展描述")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("count")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),_("td",[t._v("本次请求返回的bucket的数量")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("total")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),_("td",[t._v("总共的数据数量")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("scrollid")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),_("td",[t._v("给下次翻页请求带上的id")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("buckets")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("数组")]),t._v(" "),_("td",[t._v("业务数据的内容")])])])]),t._v(" "),_("h5",{attrs:{id:"备注"}},[t._v("备注")]),t._v(" "),_("ul",[_("li",[t._v("url参数domainId可从业务服务（dorado）的登录接口返回中获取")])])])}),[],!1,null,null,null);e.default=v.exports}}]);