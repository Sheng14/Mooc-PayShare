const envList = { // 定义各种环境变量对应的配置
    dev: {
        baseUrl: ''
    },
    prod: {
        baseUrl: ''
    },
    test: {
        baseUrl: ''
    }
}

let currentEnv = 'prod' // 手动修改环境变量，有了下面自动根据域名获取环境变量就无需这个了

let params = {
    'dev-m.51purse.com': 'dev',
    'm.51purse.com': 'prod',
    'test-m.51purse.com': 'test'
}

currentEnv = params[location.hostname]

export default envList[currentEnv];