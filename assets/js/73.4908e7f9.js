(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{429:function(v,_,t){"use strict";t.r(_);var a=t(25),r=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"tcp-udp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-udp"}},[v._v("#")]),v._v(" TCP / UDP")]),v._v(" "),t("h2",{attrs:{id:"tcp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[v._v("#")]),v._v(" TCP")]),v._v(" "),t("p",[v._v("TCP（Transmission Control Protocol，传输控制协议）是基于连接的协议，也就是说，在正式收发数据前，必须和对方建立可靠的连接。")]),v._v(" "),t("p",[v._v("一个TCP连接必须要经过三次“对话”才能建立起来")]),v._v(" "),t("h3",{attrs:{id:"名词解释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[v._v("#")]),v._v(" 名词解释")]),v._v(" "),t("ol",[t("li",[v._v("ACK 是 TCP 报头的控制位之一，对数据进行确认。确认由目的端发出，用它来告诉发送端这个序列号之前的数据段都收到了\n"),t("ol",[t("li",[v._v("比如确认号为X，则表示前 X-1 个数据段都收到了，只有当 ACK=1 时,确认号才有效，当 ACK=0 时，确认号无效，这时会要求重传数据，保证数据的完整性")])])]),v._v(" "),t("li",[v._v("SYN 同步序列号，TCP建立连接时将这个位 置1")]),v._v(" "),t("li",[v._v("FIN 发送端完成发送任务位，当TCP完成数据传输需要断开时,提出断开连接的一方将这位置1")])]),v._v(" "),t("h3",{attrs:{id:"特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[v._v("#")]),v._v(" 特性")]),v._v(" "),t("h4",{attrs:{id:"三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[v._v("#")]),v._v(" 三次握手")]),v._v(" "),t("p",[v._v("需要进行三次握手：")]),v._v(" "),t("ol",[t("li",[v._v("主机向服务器发送一个建立连接的请求；发送一个含有同步序列号的标志位的数据段给服务器")]),v._v(" "),t("li",[v._v("服务器接到请求后发送同意连接的信号；用一个带有确认应答（ACK）和同步序列号（SYN）标志位的数据段响应主机")]),v._v(" "),t("li",[v._v("主机接到同意连接的信号后，再次向服务器发送了确认信号 ;")])]),v._v(" "),t("h4",{attrs:{id:"四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[v._v("#")]),v._v(" 四次挥手")]),v._v(" "),t("ol",[t("li",[v._v("第一次：当主机A完成数据传输后,将控制位 FIN 置1，提出停止 TCP 连接的请求")]),v._v(" "),t("li",[v._v("第二次：主机B收到FIN后对其作出响应，确认这一方向上的TCP连接将关闭,将 ACK 置1")]),v._v(" "),t("li",[v._v("第三次：由B端再提出反方向的关闭请求,将 FIN 置1")]),v._v(" "),t("li",[v._v("第四次：主机A对主机B的请求进行确认，将 ACK 置1，双方向的关闭结束")])]),v._v(" "),t("p",[v._v("注意：这里的四次挥手中服务器两次向主机发送消息，第一次是回复主机已收到断开的请求，第二次是向主机确认是否断开，确保数据传输完毕")]),v._v(" "),t("h3",{attrs:{id:"tcp应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp应用"}},[v._v("#")]),v._v(" TCP应用")]),v._v(" "),t("ul",[t("li",[v._v("HTTP")]),v._v(" "),t("li",[v._v("SMTP 电子邮件")]),v._v(" "),t("li",[v._v("TELENT 远程终端接入")]),v._v(" "),t("li",[v._v("FTP")])]),v._v(" "),t("h2",{attrs:{id:"udp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#udp"}},[v._v("#")]),v._v(" UDP")]),v._v(" "),t("p",[v._v("UDP（User Data Protocol，用户数据报协议）是与TCP相对应的协议。它是面向 "),t("strong",[v._v("非连接")]),v._v(" 的协议，它不与对方建立连接，而是直接就把数据包发送过去")]),v._v(" "),t("p",[v._v("UDP适用于一次只传送少量数据、对可靠性要求不高的应用环境")]),v._v(" "),t("h3",{attrs:{id:"udp应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#udp应用"}},[v._v("#")]),v._v(" UDP应用")]),v._v(" "),t("ul",[t("li",[v._v("DNS")]),v._v(" "),t("li",[v._v("TFTP")]),v._v(" "),t("li",[v._v("RIP 路由选择协议")]),v._v(" "),t("li",[v._v("DHCP / BOOTP")]),v._v(" "),t("li",[v._v("SNMP 网络管理")]),v._v(" "),t("li",[v._v("NFS 远程文件服务器")])]),v._v(" "),t("h2",{attrs:{id:"异同点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#异同点"}},[v._v("#")]),v._v(" 异同点")]),v._v(" "),t("ol",[t("li",[v._v("基于连接与无连接")]),v._v(" "),t("li",[v._v("对系统资源的要求（TCP 较多，UDP 少）")]),v._v(" "),t("li",[v._v("UDP程序结构较简单")]),v._v(" "),t("li",[v._v("流模式与数据报模式")]),v._v(" "),t("li",[v._v("TCP保证数据正确性，UDP可能丢包")]),v._v(" "),t("li",[v._v("TCP保证数据顺序，UDP不保证")])])])}),[],!1,null,null,null);_.default=r.exports}}]);