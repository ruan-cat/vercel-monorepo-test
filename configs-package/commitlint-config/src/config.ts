import { type UserConfig } from "cz-git";

/**
 * @description
 * 这个配置文件不能使用ts格式 ts不被支持
 *
 * 该配置没有 scopes 范围
 *
 * @see https://cz-git.qbb.sh/zh/config/#中英文对照模板
 * @see https://cz-git.qbb.sh/zh/recipes/#
 */
export const config: UserConfig = {
	rules: {
		// @see: https://commitlint.js.org/#/reference-rules
	},
	prompt: {
		alias: { fd: "docs: fix typos" },

		messages: {
			type: "选择你要提交的类型 :",
			scope: "选择一个提交范围（可选）:",
			customScope: "请输入自定义的提交范围 :",
			subject: "填写简短精炼的变更描述 :\n",
			body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
			breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
			footerPrefixesSelect: "选择关联issue前缀（可选）:",
			customFooterPrefix: "输入自定义issue前缀 :",
			footer: "列举关联issue (可选) 例如: #31, #I3244 :\n",
			confirmCommit: "是否提交或修改commit ?",
		},

		/**
		 * 基于monorepo内项目，决定提交范围域
		 *
		 * 该配置可以用 getUserConfig 函数设置
		 */
		// scopes,

		// https://cz-git.qbb.sh/zh/recipes/#多选模式
		enableMultipleScopes: true,
		scopeEnumSeparator: ",",

		allowCustomScopes: true,
		allowEmptyScopes: true,
		customScopesAlign: "bottom",
		customScopesAlias: "custom",
		emptyScopesAlias: "empty",

		types: [
			{ value: "✨ feat", name: "✨ feat:     新增功能 | A new feature" },
			{ value: "🐞 fix", name: "🐞 fix:      修复缺陷 | A bug fix" },
			{ value: "📃 docs", name: "📃 docs:     文档更新 | Documentation only changes" },
			{ value: "🧪 test", name: "🧪 test:     测试相关 | Adding missing tests or correcting existing tests" },
			{
				value: "🔧 build",
				name: "🔧 build:    构建相关 | Changes that affect the build system or external dependencies",
			},
			{ value: "🐎 ci", name: "🐎 ci:       持续集成 | Changes to our CI configuration files and scripts" },
			{ value: "📢 publish", name: "📢 publish:  发包 | 依赖包发布版本。" },
			{
				value: "🦄 refactor",
				name: "🦄 refactor: 代码重构 | A code change that neither fixes a bug nor adds a feature",
			},
			{ value: "🎈 perf", name: "🎈 perf:     性能提升 | A code change that improves performance" },
			{ value: "🎉 init", name: "🎉 init:     初始化 | 项目初始化。" },
			{ value: "⚙️ config", name: "⚙️ config:    更新配置 | 配置更新。通用性的配置更新。" },

			{ value: "🐳 chore", name: "🐳 chore:    其他修改 | Other changes that do not modify src or test files" },
			{ value: "↩ revert", name: "↩ revert:   回退代码 | Revert to a commit" },
			{ value: "🗑 del", name: "🗑 del:    删除垃圾 | 删除无意义的东西，注释，文件，代码段等。" },
			{ value: "🌐 i18n", name: "🌐 i18n:    国际化 | 专门设置国际化的翻译文本。" },
			{ value: "🌈 style", name: "🌈 style:    代码格式 | Changes that do not affect the meaning of the code" },
			{
				value: "🤔 save-file",
				name: "🤔 save-file:    保存文件 | 文件保存类型。仅仅是为了保存文件。有时候会需要紧急提交，并快速切换分支。此时就需要提交代码。并保存文件。",
			},
			{ value: "✋ main-pull-update", name: "✋ main-pull-update:    主分支拉取更新 | 主分支拉取更新。" },
			{ value: "⏩ mark-progress", name: "⏩ mark-progress:    标记进度 | 标记进度。" },
		],
		useEmoji: true,
		emojiAlign: "center",
		useAI: false,
		aiNumber: 1,
		themeColorCode: "",

		upperCaseSubject: false,
		/** 允许使用破坏性变更的标记 */
		markBreakingChangeMode: true,
		allowBreakingChanges: ["feat", "fix"],
		breaklineNumber: 100,
		breaklineChar: "|",
		skipQuestions: [],
		issuePrefixes: [
			// 如果使用 gitee 作为开发管理
			{ value: "link", name: "link:     链接 ISSUES 进行中" },
			{ value: "closed", name: "closed:   标记 ISSUES 已完成" },
		],
		customIssuePrefixAlign: "top",
		emptyIssuePrefixAlias: "skip",
		customIssuePrefixAlias: "custom",
		allowCustomIssuePrefix: true,
		allowEmptyIssuePrefix: true,
		confirmColorize: true,
		scopeOverrides: undefined,
		defaultBody: "",
		defaultIssues: "",
		defaultScope: "",
		defaultSubject: "",
	},
};
