import { dirname, join, resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";
import * as fs from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { upperFirst } from "lodash-es";
import { createPlugin, getName } from "vite-plugin-autogeneration-import-file";

const { autoImport } = createPlugin();

/**
 * 解析目录
 * @description
 * 用于解析目录路径 默认从项目根目录开始
 *
 * 这里的项目根目录默认为 process.cwd()
 */
function pathResolve(dir: string) {
	const resPath = resolve(process.cwd(), dir);
	console.info(` 解析的文件路径: ${resPath}`);
	return resPath;
}

type DirOptions = Parameters<typeof autoImport>["0"];
type DirOption = DirOptions[number];
type _DirOptionName = DirOption["name"];

type _DirOptionNameNotString = Exclude<_DirOptionName, string>;
type DirOptionName = NonNullable<_DirOptionNameNotString>;

/**
 * 创建名称生成函数
 * @description
 * 用于诸如特定的名称前缀 便于实现模块注册
 */
export function createDirOptionNameFunction(
	/**
	 * 组件名称前缀
	 * @description
	 * 一般写成大写字母
	 * @example
	 * Components
	 * Page
	 */
	prefix: string = "",
) {
	/**
	 * 组件名命名规则支持字符串模板和函数
	 * @description
	 * 设置首字母为大写
	 */
	const dirOptionName: DirOptionName = function name(fileName) {
		const resFileName = getName(fileName);
		const resFileNameWithPrefix = <const>`${upperFirst(prefix)}${upperFirst(resFileName)}`;
		return resFileNameWithPrefix;
	};

	return dirOptionName;
}

/**
 * 默认的自动导入模板文件名
 * @description
 * 你可以在项目内准备一个模板文件 这个模板文件建议取名为 components.template.d.ts
 * 读取模板时 会默认读取该名称的文件
 * @example components.template.d.ts
 */
export const defaultAutoImportTemplateFilename = <const>"components.template.d.ts";

/**
 * 默认的自动导入模板文件路径
 * @description
 * 我们默认你的模板文件在项目根目录下的 template 文件夹内
 */
export const defaultAutoImportTemplatePath = <const>`./template/${defaultAutoImportTemplateFilename}`;

// console.log(fs.readFileSync(defaultAutoImportTemplatePath, "utf-8"));
// console.log(__dirname);

/**
 * 直接获得默认的自动导入模板
 * @description
 * 直接读取本项目内的 components.template.d.ts 文件
 * 反正都读取默认模板了 直接获取字符串即可
 */
export function getDefaultAutoImportTemplate() {
	/** 相对路径文件 就在旁边的文件 */
	const templatePath = join(__dirname, defaultAutoImportTemplatePath);

	// console.info(`templatePath: ${templatePath}`);

	return fs.readFileSync(templatePath, "utf-8");
}

// console.log(getDefaultAutoImportTemplate());
// getDefaultAutoImportTemplate();

/**
 * 创建文件生成模板字符串
 * @description
 * 会生成一个字符串 用于作为生成类型声明文件的模板
 */
function createAutoImportTemplate(
	/**
	 * 模板路径
	 * @description
	 * 你可以传入一个模板路径 默认会读取项目根目录下的 template 文件夹内的 components.template.d.ts 文件
	 * @default ./template/components.template.d.ts
	 */
	path?: string,
) {
	const filepath = path ?? defaultAutoImportTemplatePath;
	return fs.readFileSync(pathResolve(filepath), "utf-8");
}

// TODO
// const autoImportTemplate = createAutoImportTemplate();
