import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '5f890c58590f4ea183ecbca2a4f29548'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '5e61ee3f0a5145fb80700d985f8cf7f1'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '7d89973c5cc348e8bba25688dfa7c156'
                    }
                    'lodash.snakecase@4.1.1/index.js': {
                        table: 'sys_module'
                        id: '03796f868c1548ccaedf236fa4b6da2f'
                    }
                    'lodash.snakecase@4.1.1/package.json': {
                        table: 'sys_module'
                        id: '9ebafd53c5244d8eaf7097eb2b027caf'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '7b2fe8d1b0d6455c8def73ae759503af'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '9da1fa5e711f44d3aaf1c1d4421c262c'
                    }
                }
            }
        }
    }
}
