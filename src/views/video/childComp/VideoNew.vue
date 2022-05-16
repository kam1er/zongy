<template>
    <div class="mainContainer">
        <!--		<div class="urlbox">-->
        <!--			<div class="item">动态切换</div>-->
        <!--			<div class="item input">-->
        <!--				<el-input v-model="rtsp2" placeholder="这里演示动态切换播放源" size="small"></el-input>-->
        <!--			</div>-->
        <!--			&lt;!&ndash; <div class="item">指定窗口</div> &ndash;&gt;-->
        <!--			<div class="item">-->
        <!--				<el-input-number v-model="win" :step="1" size="small" @change="setType()" :min="1"></el-input-number>-->
        <!--			</div>-->
        <!--			<div class="item" style="margin-left: 10px;">-->
        <!--				<el-button type="primary" @click="changUrl()" size="small">切换</el-button>-->
        <!--			</div>-->
        <!--			&lt;!&ndash; <div class="item" style="margin-left: 10px;">-->
        <!--				<el-button @click="init()" size="small" type="danger">链接</el-button>-->
        <!--			</div> &ndash;&gt;-->

        <!--		</div>-->

        <!--		<div class="tool">-->
        <!--			<div class="item">窗口宽度</div>-->
        <!--			<div class="item">-->
        <!--				<el-input v-model="width" size="small" class="input" @blur="resize(0)"></el-input>-->
        <!--			</div>-->
        <!--			<div class="item">窗口高度</div>-->
        <!--			<div class="item">-->
        <!--				<el-input v-model="height" size="small" class="input" @blur="resize(0)"></el-input>-->
        <!--			</div>-->
        <!--			<div class="item">左边距</div>-->
        <!--			<div class="item">-->
        <!--				<el-input v-model="left" size="small" class="input" @blur="resize(1)"></el-input>-->
        <!--			</div>-->
        <!--			<div class="item">上边距</div>-->
        <!--			<div class="item">-->
        <!--				<el-input v-model="top" size="small" class="input" @blur="resize(1)"></el-input>-->
        <!--			</div>-->
        <!--			<div class="item">分屏样式</div>-->
        <!--			<div class="item">-->
        <!--				<el-input-number v-model="ShowType" :step="1" size="small" @change="setType()" :min="1">-->
        <!--				</el-input-number>-->
        <!--			</div>-->
        <!--		</div>-->
        <div class="tool">
            <div class="item">播放源JSON</div>
            <el-input v-model="WebCfg" size="small"></el-input>
            <div class="item">
                <el-button size="small" @click="RePlay()" type="primary">重新播放</el-button>
            </div>
        </div>
        <div class="video-container" ref="player">
            播放器区域
        </div>
        <!--		<div class="tool">-->
        <!--			<div class="item">设置字幕</div>-->
        <!--			<div class="item" style="flex: 1;">-->
        <!--				<el-input size="small" placeholder="请输入内容" v-model="danmu.text"></el-input>-->
        <!--			</div>-->
        <!--			<div class="item">-->
        <!--				<el-select size="small" v-model="danmu.position" placeholder="请选择" style="width: 100PX;">-->
        <!--					<el-option label="顶部" value="TOP">-->
        <!--					</el-option>-->
        <!--					<el-option label="底部" value="BOTTOM">-->
        <!--					</el-option>-->
        <!--				</el-select>-->
        <!--			</div>-->
        <!--			<div class="item">位置（x）</div>-->
        <!--			<div class="item">-->
        <!--				<el-input v-model="danmu.x" size="small" class="input"></el-input>-->
        <!--			</div>-->
        <!--			<div class="item">位置（y）</div>-->
        <!--			<div class="item">-->
        <!--				<el-input v-model="danmu.y" size="small" class="input"></el-input>-->
        <!--			</div>-->
        <!--			<div class="item">透明度</div>-->
        <!--			<div class="item">-->
        <!--				<el-input v-model="danmu.opacity" size="small" class="input"></el-input>-->
        <!--			</div>-->
        <!--			<div class="item">大小</div>-->
        <!--			<div class="item">-->
        <!--				<el-input v-model="danmu.size" size="small" class="input"></el-input>-->
        <!--			</div>-->
        <!--			<div class="item">-->
        <!--				<el-button size="small" @click="setText()" type="primary">设置</el-button>-->
        <!--			</div>-->
        <!--		</div>-->
        <!--		<div class="tool">-->
        <!--			<div class="item">选择窗口ID</div>-->
        <!--			<div class="item">-->
        <!--				<el-input-number v-model="win" :step="1" size="small" @change="setType()" :min="1"></el-input-number>-->
        <!--			</div>-->
        <!--			<div class="item">-->
        <!--				<el-button size="small" @click="getCapture">抓图</el-button>-->
        <!--			</div>-->
        <!--			<el-button size="small" @click="watermask">设置水印</el-button>-->
        <!--			<el-button size="small" @click="RecordToFile">-->
        <!--				<span v-if="isRecordToFile">停止录像</span>-->
        <!--				<span v-else>本地录像</span>-->
        <!--			</el-button>-->
        <!--			<el-button size="small" v-if="isSecond" @click="closeOther">-->
        <!--				关闭第二个小程序-->
        <!--			</el-button>-->
        <!--			<el-button size="small" @click="openOther" v-else>-->
        <!--				启动第二个小程序-->
        <!--			</el-button>-->

        <!--			&lt;!&ndash; <el-button size="small" @click="fullscreen">全屏</el-button>-->
        <!--			<el-button size="small" @click="showApp">-->
        <!--				<span v-if="isshow">隐藏</span>-->
        <!--				<span v-else>显示</span>-->
        <!--			</el-button> &ndash;&gt;-->
        <!--		</div>-->
        <!--		<div class="tool">-->
        <!--			<div class="item">版本号</div>-->
        <!--			<div class="item">-->
        <!--				<el-input v-model="version" size="small"></el-input>-->
        <!--			</div>-->
        <!--			<el-button size="small" @click="update" type="primary">校验升级</el-button>-->
        <!--		</div>-->
        <!--		<el-input type="textarea" :rows="5" placeholder="发送日志" v-model="log">-->
        <!--		</el-input>-->
    </div>
</template>

<!--<script>-->
<!--    //集成开发说明：所有交互都是通过JS建立websocket连接后，发送或接收JSON包进行，都是异步请求，发送和接收包都携带rid用来标识请求返回包对应是哪个请求的结果-->
<!--    //所有发送的msg中用到的长整形rid 可以自己指定 不同的发送请求定义唯一的rid 这样可以在回调用轻松判断-->
<!--    //针对一些特殊请求，可以根据自己的实际情况把rid固定，如启动播放时指定固定rid获得启动播放的实例ID-->
<!--    //首先建立第一个websocket连接到中间件服务端口启动vlc播放小程序 然后获得启动小程序的侦听端口建立第二个websocket连接 主要用来进行控制播放、截图、录像、设置字幕等操作-->
<!--    //多路播放时分屏窗口id 是固定的参数 从1开始计数 计数顺序为 从左到右，从上到下-->
<!--    //释放播放小程序，直接关闭建立的第一个websocket连接即可-->
<!--    import GetDefaultConn from "@/common/base.js"-->
<!--    //加载websoket类-->
<!--    import websocket from '@/common/websocket'-->
<!--    export default {-->
<!--        components: {-->

<!--        },-->
<!--        data() {-->
<!--            return {-->
<!--                isdown: false,-->
<!--                id: 0, //当前vlc小程序实例ID-->
<!--                id2: 0, //保存启动的第二个vlc小程序实例ID-->
<!--                rid: 100, // 起始请求序号-->
<!--                run1:1, // 请求启动播放实例序号1-->
<!--                run2:2, // 请求启动播放实例序号2-->
<!--                win: 1, // 播放实例中当前操作的窗口序号ID-->
<!--                port: 0, // 播放实例的实际websocket侦听端口-->
<!--                rtsp: 'http://www.yuanmaster.com/RTSP.mp4',-->
<!--                rtsp2: 'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov',-->
<!--                isSecond: false,-->
<!--                width: 1100,-->
<!--                height: 500,-->
<!--                left: 0,-->
<!--                top: 0,-->
<!--                IframeX: -10,-->
<!--                IframeY: 0,-->
<!--                ShowType: 1, //分屏数量-->
<!--                WebCfg:'[{"ID":2,"Uri":"rtsp://112.27.92.85:554/openUrl/Yiokw1y?beginTime=20220413T151000&endTime=20220413T151200&playBackMode=1","Option":":rtsp-tcp"}]',-->
<!--                result: [], //日志结果数组-->
<!--                socket: [], //websocket对象数组-->
<!--                current: 0, //当前用到的websocket对象-->
<!--                isRecordToFile: false, //记录录像的状态-->
<!--                recordid: 0, //录像时候需要用到的recordid-->
<!--                isshow: true, //当前小程序是不是隐藏-->
<!--                danmu: {-->
<!--                    //需要发送的字幕配置信息-->
<!--                    text: '您好呀，O(∩_∩)O哈哈~',-->
<!--                    position: 'TOP',-->
<!--                    color: "#ff0000",-->
<!--                    opacity: 128,-->
<!--                    size: 50,-->
<!--                    x: 0,-->
<!--                    y: 0-->
<!--                },-->
<!--                version: '2.2.5.2' //版本信息-->
<!--            }-->
<!--        },-->
<!--        computed: {-->
<!--            log() {-->
<!--                return this.result.join("\n")-->
<!--            },-->
<!--            clients() {-->
<!--                //获取当前客户端总数-->
<!--                return this.socket.length-->
<!--            }-->
<!--        },-->
<!--        mounted() {-->
<!--            //初始化配置-->
<!--            this.init()-->
<!--            /// 响应改变浏览器窗口大小-->
<!--            let _this = this-->
<!--            window.onresize = ()=>{-->
<!--                _this.pageResize()-->
<!--            }-->
<!--        },-->
<!--        destroyed(){-->
<!--            window.onresize = null-->
<!--        },-->
<!--        beforeDestroy() {-->
<!--            //关闭所有websocket链接以及浏览器监听-->
<!--            this.close()-->
<!--        },-->
<!--        methods: {-->
<!--            init() {-->
<!--                //监听浏览器切换标签页面-->
<!--                document.addEventListener('visibilitychange', this.handleVisiable)-->
<!--                //侦听滚动条-->
<!--                window.addEventListener('scroll', this.windowScroll)-->
<!--                //监听当页面离开时候-->
<!--                window.addEventListener('unload', this.unloadHandler)-->
<!--                //获取播放器位置节点信息-->
<!--                this.getPlayerPosition()-->
<!--                //启动VLC小程序-->
<!--                this.StartVlcPlayer()-->
<!--            },-->
<!--            windowScroll() {-->
<!--                // 滚动条距离页面顶部的距离-->
<!--                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop-->
<!--                if(this.id > 0)-->
<!--                    this.appScroll(0, this.id, scrollTop)-->
<!--                if (this.id2 > 0)-->
<!--                    this.appScroll(2, this.id2, scrollTop)-->
<!--            },-->
<!--            appScroll(current, id, scrollTop) {-->
<!--                if(id)-->
<!--                {-->
<!--                    // 默认纵向滚动小程序实例，如需要横向滚动，Code设置为1，修改Left的值-->
<!--                    // NoLog指示服务日志不输出相关日志，因为时间比较多，输出日志导致日志文件信息过多-->
<!--                    this.rid++ // 增加请求序号-->
<!--                    let msg = {-->
<!--                        "req": "Wrl_AppletScroll",-->
<!--                        "rid": this.rid,-->
<!--                        "para": {-->
<!--                            "ID": id,-->
<!--                            "NoLog": 1,-->
<!--                            "Code": 2,-->
<!--                            "Left": 0,-->
<!--                            "Top": Math.round(scrollTop)-->
<!--                        }-->
<!--                    }-->
<!--                    this.socket[current].sendObj(msg)-->
<!--                }-->
<!--            },-->
<!--            getPlayerPosition() {-->
<!--                //获取播放器位置节点信息-->
<!--                let nScrollTop = 0-->
<!--                let nScrollLeft = 0-->
<!--                let bHorizontalBar =this.hasHorizontalScrollbar()-->
<!--                let bVerticalBar = this.hasVerticalScrollbar()-->
<!--                if(bHorizontalBar){-->
<!--                    if(window.pageXOffset != undefined)-->
<!--                        nScrollLeft = Math.round(window.pageXOffset)-->
<!--                    else-->
<!--                    {-->
<!--                        //获取页面的scrollLeft(兼容写法)-->
<!--                        nScrollLeft = Math.round(document.documentElement.scrollLeft || document.body.scrollLeft)-->
<!--                    }-->
<!--                }-->
<!--                if(bVerticalBar){-->
<!--                    if(window.pageYOffset != undefined)-->
<!--                        nScrollTop = Math.round(window.pageYOffset)-->
<!--                    else-->
<!--                    {-->
<!--                        //获取页面的scrollTop(兼容写法)-->
<!--                        nScrollTop = Math.round(document.documentElement.scrollTop || document.body.scrollTop)-->
<!--                    }-->
<!--                }-->

<!--                let react = this.$refs.player.getBoundingClientRect()-->
<!--                this.left = Math.round(react.left) + nScrollLeft-->
<!--                this.top = Math.round(react.top) + nScrollTop-->
<!--            },-->
<!--            handleVisiable(e) {-->
<!--                //浏览器页面切换侦听回调函数-->
<!--                if (e.target.visibilityState === 'hidden') {-->
<!--                    //切离该页面时执行-->

<!--                    this.hideApp()-->
<!--                } else if (e.target.visibilityState === 'visible') {-->
<!--                    //切换到该页面时执行-->

<!--                    this.showApp()-->
<!--                }-->
<!--            },-->
<!--            hasVerticalScrollbar(){-->
<!--                if(document.documentElement.clientHeight)-->
<!--                    return document.body.scrollHeight > document.documentElement.clientHeight-->
<!--                return document.body.scrollHeight > window.innerHeight-->
<!--            },-->
<!--            hasHorizontalScrollbar(){-->
<!--                if(document.documentElement.clientWidth)-->
<!--                    return document.body.scrollWidth > document.documentElement.clientWidth-->
<!--                return document.body.scrollWidth > window.innerWidth-->
<!--            },-->
<!--            pageResize(){-->
<!--                if(this.id)-->
<!--                    this.SendScrollInfo(0,this.id)-->
<!--                if(this.id2)-->
<!--                    this.SendScrollInfo(2,this.id2)-->
<!--            },-->
<!--            SendScrollInfo(current,id){-->
<!--                let nScrollTop = 0-->
<!--                let nScrollLeft = 0-->
<!--                let BarCode = 0-->
<!--                let bHorizontalBar = this.hasHorizontalScrollbar()-->
<!--                let bVerticalBar = this.hasVerticalScrollbar()-->
<!--                if(bHorizontalBar){-->
<!--                    if(window.pageXOffset != undefined)-->
<!--                        nScrollLeft = Math.round(window.pageXOffset)-->
<!--                    else-->
<!--                    {-->
<!--                        //获取页面的scrollLeft(兼容写法)-->
<!--                        nScrollLeft = Math.round(document.documentElement.scrollLeft || document.body.scrollLeft)-->
<!--                    }-->
<!--                }-->
<!--                if(bVerticalBar){-->
<!--                    if(window.pageYOffset != undefined)-->
<!--                        nScrollTop = Math.round(window.pageYOffset)-->
<!--                    else-->
<!--                    {-->
<!--                        //获取页面的scrollTop(兼容写法)-->
<!--                        nScrollTop = Math.round(document.documentElement.scrollTop || document.body.scrollTop)-->
<!--                    }-->
<!--                }-->
<!--                if(bHorizontalBar)-->
<!--                    BarCode = 1-->
<!--                if(bVerticalBar)-->
<!--                    BarCode += 2-->
<!--                this.rid++ // 增加序号-->
<!--                /// 设置页码滚动信息，BarW BarH分别为预留右侧宽度和底部高度-->
<!--                let msg = {-->
<!--                    "req": "Wrl_ScrollBar",-->
<!--                    "rid": this.rid,-->
<!--                    "para": {-->
<!--                        "ID": id,-->
<!--                        "BarW": 0,-->
<!--                        "BarH": 0,-->
<!--                        "Code": BarCode,-->
<!--                        "Left": nScrollLeft,-->
<!--                        "Top": nScrollTop-->
<!--                    }-->
<!--                }-->

<!--                this.socket[current].sendObj(msg)-->
<!--            },-->
<!--            unloadHandler() {-->
<!--                //关闭所有websoket链接-->
<!--                this.close()-->
<!--            },-->
<!--            close() {-->
<!--                //关闭所有websoket链接-->

<!--                this.socket.forEach((item) => {-->
<!--                    item.disconnect()-->
<!--                })-->
<!--                this.socket = []-->
<!--                //关闭侦听浏览器页面切换-->
<!--                document.removeEventListener('visibilitychange', this.handleVisiable)-->
<!--                //关闭侦听滚动条-->
<!--                window.removeEventListener('scroll', this.windowScroll)-->
<!--                //关闭侦听滚动条-->
<!--                window.removeEventListener('unload', this.unloadHandler)-->
<!--            },-->
<!--            StartVlcPlayer() {-->
<!--                //启动第一个vlc网页小程序 Open为播放源，播放源也可以放到Web节点中，参考RePlay中实现，差异在于，Open中指定对所有分屏有效，而在Web节点中可指定更多播放参数-->
<!--                this.openWebsocket(83)-->
<!--                // HTTPS网站，连接WSS侦听端口-->
<!--                //this.openWebsocket(453)-->

<!--                let msg = {-->
<!--                    "req": "Wrl_VLCWebPlayer",-->
<!--                    "rid": this.run1,-->
<!--                    "para": {-->
<!--                        "Type": "0",-->
<!--                        "Title": "VLC多媒体播放小程序",-->
<!--                        "Flag": 578,-->
<!--                        "Left": this.left,-->
<!--                        "Top": this.top,-->
<!--                        "Width": this.width,-->
<!--                        "Height": this.height,-->
<!--                        "IframeX": this.IframeX,-->
<!--                        "IframeY": this.IframeY,-->
<!--                        "BarW": 0,-->
<!--                        "BarH": 0,-->
<!--                        "ScrollTop": 0,-->
<!--                        "Web": [],-->
<!--                        "ShowType": this.ShowType,-->
<!--                        "Open": this.rtsp-->
<!--                    }-->
<!--                }-->
<!--                this.socket[0].sendObj(msg)-->
<!--            },-->
<!--            openOther() {-->
<!--                //演示打开第二个vlc小程序 先改变第一个小程序位置 Flag值需要在原来基础上+512以支持多实例播放-->
<!--                this.width = 550-->
<!--                this.resize(0)-->

<!--                this.openWebsocket(83)-->
<!--                // HTTPS网站，连接WSS侦听端口-->
<!--                //this.openWebsocket(453)-->

<!--                this.current = 2-->
<!--                let msg = {-->
<!--                    "req": "Wrl_VLCWebPlayer",-->
<!--                    "rid": this.run2,-->
<!--                    "para": {-->
<!--                        "Type": "0",-->
<!--                        "Title": "VLC Web Player",-->
<!--                        "Flag": 578,-->
<!--                        "Left": this.left + 550,-->
<!--                        "Top": this.top,-->
<!--                        "Width": this.width,-->
<!--                        "Height": this.height,-->
<!--                        "IframeX": -10,-->
<!--                        "IframeY": 0,-->
<!--                        "BarW": 0,-->
<!--                        "BarH": 0,-->
<!--                        "ScrollTop": 0,-->
<!--                        "Web": [],-->
<!--                        "ShowType": this.ShowType,-->
<!--                        "Open": this.rtsp-->
<!--                    }-->
<!--                }-->
<!--                this.socket[this.current].sendObj(msg)-->
<!--                this.isSecond = true-->
<!--            },-->
<!--            closeOther() {-->
<!--                if (this.isSecond) {-->
<!--                    this.socket[3].disconnect()-->
<!--                    this.socket[2].disconnect()-->
<!--                    this.socket.splice(2, 2)-->
<!--                    this.isSecond = false-->
<!--                    this.id2 = 0-->
<!--                    //还原第一个小程序位置-->
<!--                    this.width = 1100-->
<!--                    this.height = 500-->
<!--                    //获取播放器位置节点信息-->
<!--                    let react = this.$refs.player.getBoundingClientRect()-->
<!--                    this.left = react.left-->
<!--                    this.top = react.top-->
<!--                    this.resize(0)-->
<!--                }-->
<!--            },-->
<!--            RePlay()-->
<!--            {-->
<!--                console.log(this.id);-->
<!--                if (this.id > 0)-->
<!--                {-->
<!--                    this.rid++ // 增加请求序号-->
<!--                    let msg = {-->
<!--                        "req": "Wrl_AppletControl",-->
<!--                        "rid": this.rid,-->
<!--                        "para": {-->
<!--                            "ID": this.id,-->
<!--                            "Code": 1-->
<!--                        }-->
<!--                    }-->
<!--                    this.socket[0].sendObj(msg)-->
<!--                    this.socket.pop()-->
<!--                }-->
<!--                this.id = 0-->
<!--                this.current = 0-->
<!--                //重新初始化播放，采用不需要Url参数的方式,Flag+64，Web配置播放源，设置分屏风格4-->
<!--                this.ShowType = 1-->
<!--                let Msg = {-->
<!--                    "req": "Wrl_VLCWebPlayer",-->
<!--                    "rid": 1,-->
<!--                    "para": {-->
<!--                        "Type": "0",-->
<!--                        "Title": "VLC多媒体播放小程序",-->
<!--                        "Flag": 66,-->
<!--                        "Left": this.left,-->
<!--                        "Top": this.top,-->
<!--                        "Width": this.width,-->
<!--                        "Height": this.height,-->
<!--                        "IframeX": this.IframeX,-->
<!--                        "IframeY": this.IframeY,-->
<!--                        "BarW": 0,-->
<!--                        "BarH": 0,-->
<!--                        "ScrollTop": 0,-->
<!--                        Open: this.rtsp,-->
<!--                        "Web": JSON.parse(this.WebCfg),-->
<!--                        "ShowType": this.ShowType-->
<!--                    }-->
<!--                }-->
<!--                this.socket[0].sendObj(Msg)-->
<!--            },-->
<!--            openWebsocket(port) {-->
<!--                //打开websocket服务-->
<!--                let ws = GetDefaultConn(port)-->
<!--                const socketClient = new websocket(ws, {-->
<!--                    reconnectEnabled: false-->
<!--                })-->
<!--                socketClient.connect()-->
<!--                this.socket.push(socketClient)-->
<!--                socketClient.onMessage = (msg) =>-->
<!--                {-->

<!--                    let res = JSON.parse(msg.data)-->
<!--                    if(res.req === 'Wrl_VLCWebPlayer')-->
<!--                    {-->
<!--                        // 根据请求名称处理...-->
<!--                    }-->
<!--                    if (res.event === 'Wrl_AppletOK') {-->
<!--                        //小程序创建成功后根据事件名称获取当前小程序id-->
<!--                        if (res.rid === this.run1) {-->
<!--                            this.id = res.aid-->
<!--                            this.SendScrollInfo(0,this.id)-->

<!--                        }-->
<!--                        if (res.rid === this.run2) {-->
<!--                            this.id2 = res.aid-->
<!--                            this.SendScrollInfo(2,this.id2)-->

<!--                        }-->
<!--                    }-->
<!--                    if (res.event === 'Wrl_Listen') {-->
<!--                        this.port = res.data.port-->
<!--                        //小程序创建成功后台 获取当前小程序返回的端口-->
<!--                        //这里开通另外一个websocket 来实现重新指定播放源，暂停播放，抓图等-->
<!--                        this.openWebsocket(this.port)-->
<!--                    }-->
<!--                    //切换窗口的时候 设定当前窗口为此窗口-->
<!--                    if (res.event === 'VLC_Selected') {-->
<!--                        this.win = res.ID-->
<!--                    }-->
<!--                    //侦听录像的rid-->
<!--                    if (res.rid === 9000) {-->
<!--                        //记录录像的pid-->
<!--                        this.recordid = res.data.PID-->
<!--                    }-->
<!--                    if (res.rid === 9001) {-->
<!--                        this.$message.success("录像成功\n" + res.data.File);-->
<!--                        //console.log(res.data.Img[0].File)-->
<!--                    }-->
<!--                    if (res.rid === 9002) {-->
<!--                        this.$message.success("截图成功\n" + res.data.Img[0].File)-->
<!--                        //console.log(res.data.Img[0].File)-->
<!--                    }-->
<!--                    if (res.rid === 9999)-->
<!--                    {-->
<!--                        if (res.data.Update === 1) {-->
<!--                            this.$confirm('有新版本发布, 是否升级?', '提示', {-->
<!--                                confirmButtonText: '确定',-->
<!--                                cancelButtonText: '取消',-->
<!--                                type: 'warning'-->
<!--                            }).then(() => {-->
<!--                                this.getUpdateJson()-->
<!--                            }).catch(() => {-->

<!--                            })-->
<!--                        } else {-->
<!--                            this.$message.success('暂无新版本')-->
<!--                        }-->
<!--                    }-->
<!--                    //记录日志-->
<!--                    this.result.push(msg.data)-->
<!--                }-->
<!--                socketClient.onClose = (msg) => {-->

<!--                }-->
<!--                socketClient.onError = (msg) => {-->

<!--                    //连接不上，认为还没有安装VLC网页播放程序 没有安装时提示安装-->
<!--                    this.$confirm('RTSP视频流网页播放小程序 尚未安装，是否马上下载？', '提示', {-->
<!--                        confirmButtonText: '确定',-->
<!--                        cancelButtonText: '取消',-->
<!--                        type: 'warning'-->
<!--                    }).then(() => {-->
<!--                        window.open('http://www.yuanmaster.com/Yuandashi.exe')-->
<!--                    }).catch(() => {-->

<!--                    })-->
<!--                }-->
<!--            },-->
<!--            resize(position) {-->
<!--                //请求改变第一个播放实例小程序显示位置或大小，如不需要改变显示位置，不传X和Y-->
<!--                if(this.id){-->
<!--                    this.rid++ // 增加请求序号-->
<!--                    if(position){-->
<!--                        let msg = {-->
<!--                            "req": "Wrl_AppletResize",-->
<!--                            "rid": this.rid,-->
<!--                            "para": {-->
<!--                                "ID": this.id,-->
<!--                                "X": this.left,-->
<!--                                "Y": this.top,-->
<!--                                "Width": this.width,-->
<!--                                "Height": this.height-->
<!--                            }-->
<!--                        }-->
<!--                        this.socket[0].sendObj(msg)-->
<!--                    }-->
<!--                    else{-->
<!--                        let msg = {-->
<!--                            "req": "Wrl_AppletResize",-->
<!--                            "rid": this.rid,-->
<!--                            "para": {-->
<!--                                "ID": this.id,-->
<!--                                "Width": this.width,-->
<!--                                "Height": this.height-->
<!--                            }-->
<!--                        }-->
<!--                        this.socket[0].sendObj(msg)-->
<!--                    }-->
<!--                }-->
<!--            },-->
<!--            getCapture() {-->
<!--                //请求截图，固定请求ID处理，也可以是建立一个map记录每个rid对应的含义，请求返回里再处理-->
<!--                let msg = {-->
<!--                    "req": "VLC_VideoSnapshot",-->
<!--                    "rid": 9002,-->
<!--                    "para": [{-->
<!--                        "ID": this.win,-->
<!--                        "Type": 4,-->
<!--                        "Count": 1,-->
<!--                        "Delay": 1000,-->
<!--                        "Interval": 200,-->
<!--                        "PathType": 1-->
<!--                    }]-->
<!--                }-->
<!--                this.socket[1].sendObj(msg)-->
<!--            },-->
<!--            setText() {-->
<!--                //发送字幕到指定的窗口ID-->
<!--                this.rid++ // 增加请求序号-->
<!--                let msg = {-->
<!--                    "req": "VLC_MarqueePut",-->
<!--                    "rid": this.rid,-->
<!--                    "para": [{-->
<!--                        "ID": this.win,-->
<!--                        "Text": this.danmu.text,-->
<!--                        "Position": this.danmu.position,-->
<!--                        "Timeout": 0,-->
<!--                        "Color": this.danmu.color,-->
<!--                        "Opacity": this.danmu.opacity,-->
<!--                        "Refresh": 1,-->
<!--                        "Size": this.danmu.size,-->
<!--                        "X": this.danmu.x,-->
<!--                        "Y": this.danmu.y-->
<!--                    }]-->
<!--                }-->
<!--                this.socket[1].sendObj(msg)-->
<!--            },-->
<!--            setType() {-->
<!--                //动态改变屏幕数量-->
<!--                this.rid++ // 增加请求序号-->
<!--                let msg = {-->
<!--                    "req": "VLC_ChangePlay",-->
<!--                    "rid": this.rid,-->
<!--                    "para": {-->
<!--                        "ShowType": this.ShowType-->
<!--                    }-->
<!--                }-->

<!--                this.socket[1].sendObj(msg)-->
<!--            },-->
<!--            fullscreen() {-->
<!--                //全屏-->
<!--                this.rid++ // 增加请求序号-->
<!--                let msg = {-->
<!--                    "req": "Wrl_AppletControl",-->
<!--                    "rid": this.rid,-->
<!--                    "para": {-->
<!--                        "ID": this.id,-->
<!--                        "Code": 2-->
<!--                    }-->
<!--                }-->
<!--                this.socket[0].sendObj(msg)-->
<!--            },-->
<!--            RecordToFile() {-->
<!--                //对指定的窗口ID进行录像 固定请求ID处理，也可以是建立一个map记录每个rid对应的含义，请求返回里再处理-->
<!--                let msg = {}-->
<!--                if (this.isRecordToFile) {-->

<!--                    msg = {-->
<!--                        "req": "VLC_StopRecord",-->
<!--                        "rid": 9001,-->
<!--                        "para": {-->
<!--                            "PID": this.recordid-->
<!--                        }-->
<!--                    }-->
<!--                    this.isRecordToFile = false-->
<!--                } else {-->

<!--                    msg = {-->
<!--                        "req": "VLC_RecordFile",-->
<!--                        "rid": 9000,-->
<!--                        "para": {-->
<!--                            //不指定Url时取当前焦点分屏窗口源进行录像-->
<!--                            //"Url": this.rtsp,-->
<!--                            "File": "C:/Zorro/test.mp4",-->
<!--                            "Second": 30-->
<!--                        }-->
<!--                    }-->
<!--                    this.isRecordToFile = true-->
<!--                }-->

<!--                this.socket[1].sendObj(msg)-->
<!--            },-->
<!--            watermask() {-->
<!--                //对指定的窗口ID发送水印-->
<!--                this.rid++ // 增加请求序号-->
<!--                let msg = {-->
<!--                    "req": "VLC_PutLogoShow",-->
<!--                    "rid": this.rid,-->
<!--                    "para": [{-->
<!--                        "ID": this.win,-->
<!--                        "File": "VLC.png",-->
<!--                        "Delay": 20,-->
<!--                        "Repeat": -1,-->
<!--                        "Opacity": 128,-->
<!--                        "X": 100,-->
<!--                        "Y": 100-->
<!--                    }]-->
<!--                }-->
<!--                this.socket[1].sendObj(msg)-->
<!--            },-->
<!--            changUrl() {-->
<!--                //动态改变指定的窗口ID的播放源-->
<!--                this.rid++ // 增加请求序号-->
<!--                let msg = {-->
<!--                    "req": "VLC_ChangePlay",-->
<!--                    "rid": this.rid,-->
<!--                    "para": {-->
<!--                        "Play": [{-->
<!--                            "ID": this.win,-->
<!--                            "Uri": this.rtsp2,-->
<!--                            "Name": "BrowserApplet1",-->
<!--                            "Option": ":rtsp-tcp"-->
<!--                        }]-->
<!--                    }-->
<!--                }-->
<!--                this.socket[1].sendObj(msg)-->
<!--            },-->
<!--            showApp() {-->
<!--                //显示VLC小程序-->
<!--                if (this.id > 0) {-->
<!--                    this.rid++ // 增加请求序号-->
<!--                    let msg = {-->
<!--                        "req": "Wrl_AppletControl",-->
<!--                        "rid": this.rid,-->
<!--                        "para": {-->
<!--                            "ID": this.id,-->
<!--                            "Code": 8-->
<!--                        }-->
<!--                    }-->
<!--                    this.socket[0].sendObj(msg)-->
<!--                }-->
<!--                //如果启动了第二个小程序 也显示-->
<!--                if (this.id2 > 0) {-->
<!--                    this.rid++ // 增加请求序号-->
<!--                    let msg = {-->
<!--                        "req": "Wrl_AppletControl",-->
<!--                        "rid": this.rid,-->
<!--                        "para": {-->
<!--                            "ID": this.id2,-->
<!--                            "Code": 8-->
<!--                        }-->
<!--                    }-->
<!--                    this.socket[2].sendObj(msg)-->
<!--                }-->
<!--            },-->
<!--            hideApp() {-->
<!--                //隐藏VLC小程序 Code设置4是自动隐藏，如需强制隐藏，设置为32-->
<!--                if (this.id > 0)-->
<!--                {-->
<!--                    this.rid++ // 增加请求序号-->
<!--                    let msg = {-->
<!--                        "req": "Wrl_AppletControl",-->
<!--                        "rid": this.rid,-->
<!--                        "para": {-->
<!--                            "ID": this.id,-->
<!--                            "Code": 4-->
<!--                        }-->
<!--                    }-->
<!--                    this.socket[0].sendObj(msg)-->
<!--                }-->
<!--                //如果启动了第二个小程序 也把他显示-->
<!--                if (this.id2 > 0)-->
<!--                {-->
<!--                    this.rid++ // 增加请求序号-->
<!--                    let msg = {-->
<!--                        "req": "Wrl_AppletControl",-->
<!--                        "rid": this.rid,-->
<!--                        "para": {-->
<!--                            "ID": this.id2,-->
<!--                            "Code": 4-->
<!--                        }-->
<!--                    }-->
<!--                    this.socket[2].sendObj(msg)-->
<!--                }-->
<!--            },-->
<!--            update() {-->
<!--                //校验中间件版本是不是需要升级,如果额外指定PID参数，代表校验PID代表的小程序，Wrl_Version功能多，指定特定的rid来判断-->
<!--                let msg = {-->
<!--                    "req": "Wrl_Version",-->
<!--                    "rid": 9999,-->
<!--                    "para": {-->
<!--                        "Version": this.version-->
<!--                    }-->
<!--                }-->
<!--                this.socket[0].sendObj(msg)-->
<!--            },-->
<!--            getUpdateJson() {-->
<!--                //发送中间件的升级命令，实现自动升级，同时升级海康及VLC网页播放等小程序-->
<!--                this.rid++ // 增加请求序号-->
<!--                let msg = {-->
<!--                    "req":"Wrl_Update",-->
<!--                    "rid":this.rid,-->
<!--                    "para":{-->
<!--                        "Name":"视频流网页播放小程序升级包",-->
<!--                        "Date":"2022-03-03",-->
<!--                        "Desc":"1、中间件高级版兼容360极速浏览器X64位版、Electron、Vivaldi及Brave浏览器使用；2、视频流播放小程序默认启用硬件加速GPU使用、VLC播放水印支持Base64编码图片，解决VLC绿色版64位无法使用问题；3、优化内嵌小程序强制隐藏处理；4、解决小程序WS侦听服务不支持HTTPS网站问题；5、解决网络版在IE浏览器中的WS连接无法使用问题。",-->
<!--                        "DownAddr":"http://local.zorrosoft.com/Files/Update/RTSP_Update.pid",-->
<!--                        "MD5":"75CF6CE8E835CB2064D287B2891CD3CE",-->
<!--                        "Version":"2.2.5.2",-->
<!--                        "Size":20545536,-->
<!--                        "HideIns":0,-->
<!--                        "Cookie":"",-->
<!--                        "Auth":"",-->
<!--                        "TK":"B12EB930052396C28E7A7C8DBE81FD1BEA5E199FDA3653FD8900D106138D9101D2F908E0CD24B2E6150627961499B52B999F9A51F4602314E84B0ADF44FAFBF750E1CCBA933B5C28BB877F046C8E62F9E9DA89F313454BCD72215F56D692F7FC3893637B7E0544B644314EC29EF54FCB5CB79CD88F518593205E568D02DF9D081101E477D6D84032907A6314AC657F63D0BA5A1B57F41CAAA227885AFB7EE05C82A66268BA09307A1BC403B8902D6821B8D8C5A6C4DF14531E12030C81B8CA97A0B3E3FE85AE290BFE1FEF95628CC4C23FEEBEABAAFB3EC5EBD8F3750504F024741FC1752E847C9F5EB65CD8D5E13D208C1CCB086BB3CB09CF5704898DD98A6D"-->
<!--                    }-->
<!--                }-->
<!--                this.socket[0].sendObj(msg)-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->

<style scoped>
    .mainContainer {
        display: block;
        width: 1100px;
        margin-left: auto;
        margin-right: auto;
        box-sizing: border-box;
    }

    .urlbox {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 15px 0;
    }

    .urlbox .input {
        flex: 1;
        margin: 0 15px;
    }

    .tool {
        display: flex;
        align-items: center;
        margin: 15px 0;
    }

    .tool .item {
        margin-right: 15px;
    }

    .tool .item:last-child {
        margin-right: 0;
    }

    .tool .input {
        width: 60px;
    }

    .video-container {
        position: relative;
        margin-top: 8px;
        height: 500px;
        border: #ddd 1px dashed;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        color: #ddd;
    }
</style>
