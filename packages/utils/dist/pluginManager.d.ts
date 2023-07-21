import { type NodeItem, type SchemaGroupItem } from '@jiaomatech/designer-core/packages/types/kDesigner.d';
export interface ActivitybarModel {
    id: string;
    title: string;
    icon: string;
    component: any;
}
export interface RightSidebarModel {
    id: string;
    title: string;
    component: any;
}
export interface ViewsContainersModel {
    activitybars: ActivitybarModel[];
    rightSidebars: RightSidebarModel[];
}
export type Components = Record<string, any>;
export interface EventModel {
    type: string;
    describe: string;
}
export interface ComponentConfigModel {
    component: any;
    defaultSchema: NodeItem;
    config: {
        attribute?: NodeItem[];
        style?: NodeItem[];
        event?: EventModel[];
        action?: EventModel[];
    };
    bindModel?: string;
}
export type ComponentConfigModelRecords = Record<string, ComponentConfigModel>;
export interface MethodModel {
    describe: string;
    methodName: string;
    method: (...args: any[]) => any;
}
export type PublicMethodsModel = Record<string, MethodModel>;
export interface SchemaGroup {
    list: NodeItem[];
    title: string;
}
export type SchemaGroupList = SchemaGroup[];
export declare class PluginManager {
    components: Components;
    componentConfigs: ComponentConfigModelRecords;
    schemaGroup: SchemaGroupItem[];
    schemaGroupList: import("vue").Ref<{
        list: {
            [x: string]: any;
            type: string;
            label?: string | undefined;
            field?: string | undefined;
            name?: string | undefined;
            slotName?: string | undefined;
            componentProps?: any;
            id?: string | undefined;
            rules?: {
                [x: string]: any;
                trigger?: string | string[] | undefined;
                required?: boolean | undefined;
                type?: string | undefined;
                pattern?: string | {
                    exec: (string: string) => RegExpExecArray | null;
                    test: (string: string) => boolean;
                    readonly source: string;
                    readonly global: boolean;
                    readonly ignoreCase: boolean;
                    readonly multiline: boolean;
                    lastIndex: number;
                    compile: (pattern: string, flags?: string | undefined) => RegExp;
                    readonly flags: string;
                    readonly sticky: boolean;
                    readonly unicode: boolean;
                    readonly dotAll: boolean;
                    readonly hasIndices: boolean;
                    [Symbol.match]: (string: string) => RegExpMatchArray | null;
                    [Symbol.replace]: {
                        (string: string, replaceValue: string): string;
                        (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                    };
                    [Symbol.search]: (string: string) => number;
                    [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                    [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
                } | undefined;
                min?: number | undefined;
                max?: number | undefined;
                len?: number | undefined;
                enum?: (string | number | boolean | null | undefined)[] | undefined;
                whitespace?: boolean | undefined;
                validator?: string | undefined;
                isValidator?: boolean | undefined;
                message?: string | ((a?: string | undefined) => string) | undefined;
            }[] | undefined;
            noFormItem?: boolean | undefined;
            labelCol?: any;
            wrapperCol?: any;
            children?: any[] | undefined;
            show?: boolean | ((renderCallbackParams: import("@jiaomatech/designer-core/packages/types/kDesigner.d").RenderCallbackParams) => boolean) | undefined;
        }[];
        title: string;
    }[]>;
    viewsContainers: ViewsContainersModel;
    publicMethods: PublicMethodsModel;
    /**
     * 添加组件到插件管理器中
     * @param componentName 组件名称
     * @param component 组件
     */
    component(componentName: string, component: any): void;
    /**
     * 注册组件到插件管理器中
     * @param componentConfig
     */
    registerComponent(componentConfig: ComponentConfigModel): void;
    /**
     * 获取所有插件管理中的所有组件
     * @returns components
     */
    getComponents(): Components;
    /**
     * 通过type 查询相应的组件
     * @returns components
     */
    getComponent(type: string): any;
    /**
     * 注册活动栏
     */
    registerActivitybar(activitybar: ActivitybarModel): void;
    /**
     * 获取所有activitybars
     * @returns activitybars
     */
    getActivitybars(): ActivitybarModel[];
    /**
     * 注册右侧栏
     */
    registerRightSidebar(rightSidebar: RightSidebarModel): void;
    /**
     * 获取所有rightSidebars
     * @returns rightSidebars
     */
    getRightSidebars(): RightSidebarModel[];
    /**
     * 获取所有插件管理中的所有组件配置
     * @returns componentAttrs
     */
    getComponentConfings(): ComponentConfigModelRecords;
    /**
     * 通过type获取ComponentConfing
     * @returns
     */
    getComponentConfingByType(type: string): ComponentConfigModel;
    /**
     * 设置分组,这个操作将会覆盖原来的数据
     * @param {*} schemaGroup
     * @returns
     */
    setSchemaGroup(schemaGroup: SchemaGroupItem[]): void;
    /**
     * 添加分组
     * @param {*} schemaGroupItem
     * @returns
     */
    addSchemaGroup(schemaGroupItem: SchemaGroupItem): void;
    /**
     * 计算schemaGroupList
     */
    computedSchemaGroupList(): void;
    /**
     * 按照分组获取schemaGroupList
     * @returns schemaGroupList
     */
    getSchemaByGroup(): import("vue").Ref<{
        list: {
            [x: string]: any;
            type: string;
            label?: string | undefined;
            field?: string | undefined;
            name?: string | undefined;
            slotName?: string | undefined;
            componentProps?: any;
            id?: string | undefined;
            rules?: {
                [x: string]: any;
                trigger?: string | string[] | undefined;
                required?: boolean | undefined;
                type?: string | undefined;
                pattern?: string | {
                    exec: (string: string) => RegExpExecArray | null;
                    test: (string: string) => boolean;
                    readonly source: string;
                    readonly global: boolean;
                    readonly ignoreCase: boolean;
                    readonly multiline: boolean;
                    lastIndex: number;
                    compile: (pattern: string, flags?: string | undefined) => RegExp;
                    readonly flags: string;
                    readonly sticky: boolean;
                    readonly unicode: boolean;
                    readonly dotAll: boolean;
                    readonly hasIndices: boolean;
                    [Symbol.match]: (string: string) => RegExpMatchArray | null;
                    [Symbol.replace]: {
                        (string: string, replaceValue: string): string;
                        (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                    };
                    [Symbol.search]: (string: string) => number;
                    [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                    [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
                } | undefined;
                min?: number | undefined;
                max?: number | undefined;
                len?: number | undefined;
                enum?: (string | number | boolean | null | undefined)[] | undefined;
                whitespace?: boolean | undefined;
                validator?: string | undefined;
                isValidator?: boolean | undefined;
                message?: string | ((a?: string | undefined) => string) | undefined;
            }[] | undefined;
            noFormItem?: boolean | undefined;
            labelCol?: any;
            wrapperCol?: any;
            children?: any[] | undefined;
            show?: boolean | ((renderCallbackParams: import("@jiaomatech/designer-core/packages/types/kDesigner.d").RenderCallbackParams) => boolean) | undefined;
        }[];
        title: string;
    }[]>;
    /**
     * 添加公共方法
     * @param method
     */
    addPublicMethod(method: MethodModel): void;
}
export declare const pluginManager: PluginManager;
