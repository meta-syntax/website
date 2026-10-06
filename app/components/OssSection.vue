<script setup lang="ts">
// PR の一覧・ステータス・日本語の説明は /api/oss-contributions が返す。
// 説明を足すときは server/data/oss-descriptions.ts を書き換える
const { data, error } = await useFetch('/api/oss-contributions')

// 日本語の説明が無い PR は、英語の PR タイトルから型と括弧を外して出す
const contributions = computed(() => (data.value?.contributions ?? []).map(c => ({
  ...c,
  summary: c.summary ?? c.subject
})))
const projects = computed(() => (data.value?.projects ?? []).map(p => p.name))

const mergedCount = computed(() => contributions.value.filter(c => c.status === 'merged').length)
const pad = (n: number) => String(n).padStart(2, '0')

// 取得に失敗したときの逃げ道
const searchUrl = 'https://github.com/pulls?q=is%3Apr+author%3Ameta-syntax+is%3Apublic+-user%3Ameta-syntax'
</script>

<template>
  <div>
    <p
      class="reveal mb-10 text-[#55555a] text-lg leading-relaxed"
      data-idx="1"
    >
      <!-- 改行タグの前後に空白を入れない（スマホ幅で和文の間に半角スペースが出る） -->
      Vue.js 本体や VueUse、Nitro のソースコードを読んで、不具合の原因を突き止めています。<br class="hidden sm:inline">見つけた不具合には、修正のプルリクエストを送っています。
    </p>

    <p
      v-if="error || !contributions.length"
      class="reveal oss-fallback"
      data-idx="2"
    >
      <a
        :href="searchUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="link-underline"
      >
        GitHub でプルリクエストの一覧を見る
      </a>
    </p>

    <template v-else>
      <!-- 数字の帯 -->
      <dl
        class="oss-stats reveal"
        data-idx="2"
      >
        <div class="oss-stat">
          <dt class="oss-stat-label">
            PROJECTS
          </dt>
          <dd class="oss-stat-num">
            {{ pad(projects.length) }}
          </dd>
          <dd class="oss-stat-sub">
            {{ projects.join(' / ') }}
          </dd>
        </div>
        <div class="oss-stat">
          <dt class="oss-stat-label">
            PULL REQUESTS
          </dt>
          <dd class="oss-stat-num">
            {{ pad(contributions.length) }}
          </dd>
          <dd class="oss-stat-sub">
            マージ済み {{ mergedCount }}件 / レビュー中 {{ contributions.length - mergedCount }}件
          </dd>
        </div>
      </dl>

      <ul class="oss-list">
        <li
          v-for="(c, index) in contributions"
          :key="`${c.repo}#${c.number}`"
          class="reveal"
          :data-idx="index + 3"
        >
          <a
            :href="c.url"
            target="_blank"
            rel="noopener noreferrer"
            class="oss-row group"
          >
            <span
              class="oss-status"
              :class="c.status === 'merged' ? 'is-merged' : 'is-open'"
            >
              {{ c.status === 'merged' ? 'MERGED' : 'OPEN' }}
            </span>

            <span class="min-w-0">
              <span class="oss-meta">
                {{ c.repo }} #{{ c.number }}<span class="oss-api">{{ c.api }}</span>
              </span>
              <span class="oss-summary">
                {{ c.summary }}
              </span>
              <span
                v-if="c.note"
                class="oss-note"
              >
                {{ c.note }}
              </span>
            </span>

            <UIcon
              name="i-lucide-external-link"
              class="oss-icon w-5 h-5 shrink-0"
            />
          </a>
        </li>
      </ul>
    </template>
  </div>
</template>

<style scoped>
.oss-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 3.5rem;
  border-top: 1.5px solid var(--ink);
}

.oss-stat {
  display: flex;
  flex-direction: column;
  padding: 1.25rem 1rem 0.5rem;
}

.oss-stat + .oss-stat {
  border-left: 1px solid var(--ink);
}

.oss-stat-label {
  order: 1;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.12em;
  color: var(--ink);
}

.oss-stat-num {
  order: 2;
  margin-top: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  font-size: clamp(64px, 9vw, 128px);
  line-height: 0.9;
  letter-spacing: -0.04em;
  color: var(--ink);
}

.oss-stat-sub {
  order: 3;
  margin-top: 1rem;
  font-size: 14px;
  color: var(--text-sub);
}

.oss-fallback {
  font-weight: 700;
  color: var(--ink);
}

.oss-list {
  border-top: 1px solid var(--ink);
}

.oss-list > li {
  border-bottom: 1px solid var(--ink);
}

.oss-row {
  display: grid;
  grid-template-columns: 5.5rem 1fr auto;
  gap: 1.5rem;
  align-items: start;
  padding: 1.75rem 1rem;
  color: var(--ink);
  transition: background-color 0.2s ease, color 0.2s ease;
}

.oss-status {
  justify-self: start;
  padding: 0.25rem 0.5rem;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.12em;
  border: 1.5px solid currentColor;
}

.oss-status.is-merged {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}

.oss-meta {
  display: block;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.02em;
}

.oss-api {
  margin-left: 0.75rem;
  font-weight: 500;
  color: var(--text-sub);
}

.oss-summary {
  display: block;
  margin-top: 0.5rem;
  font-size: 15px;
  line-height: 1.85;
  color: var(--text-sub);
}

.oss-note {
  display: inline-block;
  margin-top: 0.625rem;
  font-size: 12px;
  font-weight: 700;
  color: var(--accent);
}

/*
 * 反転はマウス操作の端末だけにする。スマホではタップで :hover が付いたまま残り、
 * 外部リンクから戻ったときも黒背景のままになるため
 */
@media (hover: hover) {
  .oss-row:hover {
    background: var(--ink);
    color: var(--paper);
  }

  .oss-row:hover .oss-api,
  .oss-row:hover .oss-summary {
    color: var(--paper);
  }

  .oss-row:hover .oss-note {
    color: #93b4ff;
  }
}

@media (max-width: 639px) {
  .oss-row {
    grid-template-columns: 1fr auto;
    gap: 0.875rem 1rem;
    padding: 1.5rem 0.25rem;
  }

  .oss-status {
    grid-column: 1;
  }

  .oss-row > .min-w-0 {
    grid-column: 1 / -1;
    grid-row: 2;
  }

  .oss-icon {
    grid-column: 2;
    grid-row: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .oss-row {
    transition: none;
  }
}
</style>
