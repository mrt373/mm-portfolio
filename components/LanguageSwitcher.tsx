"use client"; // このコンポーネントがクライアントコンポーネントであることを示す

import { Select } from "@mantine/core";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation"; // Next.jsのナビゲーションフックをインポート

// コンポーネントが受け取るpropsの型を定義
interface LanguageSwitcherProps {
  currentLang: string;
}

export default function LanguageSwitcher({
  currentLang,
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (value: string | null) => {
    if (!value) return;

    // 選択された表示名からロケールコード（例: 'en', 'ja'）に変換
    const newLocale = value === "日本語" ? "ja" : "en";

    // 現在のパスから言語部分を新しいロケールに置き換える
    // 例: /en/about -> /ja/about
    const newPath = pathname.replace(`/${currentLang}`, `/${newLocale}`);

    // URLを書き換えてページをリロードせずに遷移させる
    router.push(newPath);
  };

  return (
    <Select
      size="md"
      variant="unstyled"
      leftSection={<Globe className="w-4 h-4 mt-0.5" />}
      placeholder="Language"
      data={["English", "日本語"]}
      // 現在の言語に基づいてデフォルト値を設定
      defaultValue={currentLang === "ja" ? "日本語" : "English"}
      onChange={handleLanguageChange}
      comboboxProps={{ shadow: "md" }}
      allowDeselect={false}
    />
  );
}
