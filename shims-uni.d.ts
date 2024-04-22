/// <reference types='@dcloudio/types' />
import 'vue'

declare module '*.svg'
declare module '*.scss'
declare module '*.ts'
declare module '*.js'
declare module '*.mjs'
declare module 'uview-plus'
declare module 'uview-plus/index.js';

declare module '@vue/runtime-core' {
  type Hooks = App.AppInstance & Page.PageInstance;

  interface ComponentCustomOptions extends Hooks {

  }
}
