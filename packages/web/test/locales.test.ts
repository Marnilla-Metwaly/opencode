import { describe, expect, test } from "bun:test"
import { matchLocale } from "../src/i18n/locales"

describe("matchLocale", () => {
    test("matches exact and prefixed locales", () => {
        expect(matchLocale("de")).toBe("de")
        expect(matchLocale("fr-CA")).toBe("fr")
        expect(matchLocale("pt-PT")).toBe("pt-br")
        expect(matchLocale("nn-NO")).toBe("nb")
    })

    test("matches Chinese locale variants", () => {
        expect(matchLocale("zh-Hant")).toBe("zh-tw")
        expect(matchLocale("zh-TW")).toBe("zh-tw")
        expect(matchLocale("zh-CN")).toBe("zh-cn")
    })

    test("returns null for invalid or unsupported locales", () => {
        expect(matchLocale("")).toBeNull()
        expect(matchLocale("%")).toBeNull()
        expect(matchLocale("unsupported")).toBeNull()
    })
})