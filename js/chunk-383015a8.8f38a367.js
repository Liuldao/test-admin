(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-383015a8"],{3759:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Card",{attrs:{shadow:""}},[s("div",[s("div",{staticClass:"message-page-con message-category-con"},[s("Menu",{attrs:{width:"auto","active-name":"unread"},on:{"on-select":e.handleSelect}},[s("MenuItem",{attrs:{name:"unread"}},[s("span",{staticClass:"category-title"},[e._v("未读消息")]),s("Badge",{staticStyle:{"margin-left":"10px"},attrs:{count:e.messageUnreadCount}})],1),s("MenuItem",{attrs:{name:"readed"}},[s("span",{staticClass:"category-title"},[e._v("已读消息")]),s("Badge",{staticStyle:{"margin-left":"10px"},attrs:{"class-name":"gray-dadge",count:e.messageReadedCount}})],1),s("MenuItem",{attrs:{name:"trash"}},[s("span",{staticClass:"category-title"},[e._v("回收站")]),s("Badge",{staticStyle:{"margin-left":"10px"},attrs:{"class-name":"gray-dadge",count:e.messageTrashCount}})],1)],1)],1),s("div",{staticClass:"message-page-con message-list-con"},[e.listLoading?s("Spin",{attrs:{fix:"",size:"large"}}):e._e(),s("Menu",{class:e.titleClass,attrs:{width:"auto","active-name":""},on:{"on-select":e.handleView}},e._l(e.messageList,function(t){return s("MenuItem",{key:"msg_"+t.msg_id,attrs:{name:t.msg_id}},[s("div",[s("p",{staticClass:"msg-title"},[e._v(e._s(t.title))]),s("Badge",{attrs:{status:"default",text:t.create_time}}),s("Button",{directives:[{name:"show",rawName:"v-show",value:"unread"!==e.currentMessageType,expression:"currentMessageType !== 'unread'"}],staticStyle:{float:"right","margin-right":"20px"},style:{display:t.loading?"inline-block !important":""},attrs:{loading:t.loading,size:"small",icon:"readed"===e.currentMessageType?"md-trash":"md-redo",title:"readed"===e.currentMessageType?"删除":"还原",type:"text"},nativeOn:{click:function(s){s.stopPropagation(),e.removeMsg(t)}}})],1)])}),1)],1),s("div",{staticClass:"message-page-con message-view-con"},[e.contentLoading?s("Spin",{attrs:{fix:"",size:"large"}}):e._e(),s("div",{staticClass:"message-view-header"},[s("h2",{staticClass:"message-view-title"},[e._v(e._s(e.showingMsgItem.title))]),s("time",{staticClass:"message-view-time"},[e._v(e._s(e.showingMsgItem.create_time))])]),s("div",{domProps:{innerHTML:e._s(e.messageContent)}})],1)])])},n=[],i=(s("7514"),s("cebc")),r=s("2f62"),o={unread:"messageUnreadList",readed:"messageReadedList",trash:"messageTrashList"},g={name:"message_page",data:function(){return{listLoading:!0,contentLoading:!1,currentMessageType:"unread",messageContent:"",showingMsgItem:{}}},computed:Object(i["a"])({},Object(r["e"])({messageUnreadList:function(e){return e.user.messageUnreadList},messageReadedList:function(e){return e.user.messageReadedList},messageTrashList:function(e){return e.user.messageTrashList},messageList:function(){return this[o[this.currentMessageType]]},titleClass:function(){return{"not-unread-list":"unread"!==this.currentMessageType}}}),Object(r["c"])(["messageUnreadCount","messageReadedCount","messageTrashCount"])),methods:Object(i["a"])({},Object(r["d"])([]),Object(r["b"])(["getContentByMsgId","getMessageList","hasRead","removeReaded","restoreTrash"]),{stopLoading:function(e){this[e]=!1},handleSelect:function(e){this.currentMessageType=e},handleView:function(e){var t=this;this.contentLoading=!0,this.getContentByMsgId({msg_id:e}).then(function(s){t.messageContent=s;var a=t.messageList.find(function(t){return t.msg_id===e});a&&(t.showingMsgItem=a),"unread"===t.currentMessageType&&t.hasRead({msg_id:e}),t.stopLoading("contentLoading")}).catch(function(){t.stopLoading("contentLoading")})},removeMsg:function(e){e.loading=!0;var t=e.msg_id;"readed"===this.currentMessageType?this.removeReaded({msg_id:t}):this.restoreTrash({msg_id:t})}}),mounted:function(){var e=this;this.listLoading=!0,this.getMessageList().then(function(){return e.stopLoading("listLoading")}).catch(function(){return e.stopLoading("listLoading")})}},d=g,c=(s("ac69"),s("2877")),u=Object(c["a"])(d,a,n,!1,null,null,null);u.options.__file="index.vue";t["default"]=u.exports},ac69:function(e,t,s){"use strict";var a=s("e850"),n=s.n(a);n.a},e850:function(e,t,s){}}]);