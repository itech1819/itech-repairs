import { google } from 'googleapis'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const SITE_URL = 'sc-domain:itechrepairs.com.au'
const SITEMAP_URL = 'https://www.itechrepairs.com.au/sitemap.xml'
const KEY_FILE = join(__dirname, 'service-account.json')

async function submitSitemap() {
  // Load service account credentials
  let credentials
  try {
    credentials = JSON.parse(readFileSync(KEY_FILE, 'utf8'))
  } catch {
    console.error('❌ Could not read scripts/service-account.json')
    console.error('   Place your Google service account JSON key file there and retry.')
    process.exit(1)
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/webmasters'],
  })

  const searchconsole = google.searchconsole({ version: 'v1', auth })

  console.log(`Submitting sitemap: ${SITEMAP_URL}`)

  try {
    await searchconsole.sitemaps.submit({
      siteUrl: SITE_URL,
      feedpath: SITEMAP_URL,
    })
    console.log('✅ Sitemap submitted successfully!')
  } catch (err) {
    console.error('❌ Submission failed:', err.message)
    if (err.status === 403) {
      console.error('   The service account does not have access to this Search Console property.')
      console.error(`   Add the service account email as a user at: https://search.google.com/search-console/users`)
    }
    process.exit(1)
  }
}

submitSitemap()
