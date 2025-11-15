# GitHub Setup Checklist

Complete these steps in your browser to deploy the app:

## Step 1: Add API Key Secret (Required)

1. Open: https://github.com/teefisher2k20/copy-of-veo-studio/settings/secrets/actions
2. Click **"New repository secret"**
3. Fill in:
   - **Name:** `VITE_API_KEY`
   - **Secret:** Your Google AI API key from https://aistudio.google.com/apikey
4. Click **"Add secret"**

## Step 2: Enable GitHub Pages (Required)

1. Open: https://github.com/teefisher2k20/copy-of-veo-studio/settings/pages
2. Under **"Build and deployment"**:
   - **Source:** Select **"GitHub Actions"** from dropdown
3. Click **"Save"** (if button appears)

## Step 3: Trigger Deployment

The workflow should already be running from the recent push. If not:

1. Open: https://github.com/teefisher2k20/copy-of-veo-studio/actions
2. Click on **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"** → Select branch **"main"** → Click **"Run workflow"**

## Step 4: Monitor Progress

1. Go to: https://github.com/teefisher2k20/copy-of-veo-studio/actions
2. Click on the latest **"Deploy to GitHub Pages"** run
3. Wait 2-3 minutes for completion
4. Look for green checkmark ✓

## Step 5: Verify Deployment

**Your site URL:** https://teefisher2k20.github.io/copy-of-veo-studio/

### Checklist:
- [ ] Site loads without errors
- [ ] Can enter a prompt
- [ ] API key dialog works (or VITE_API_KEY is used)
- [ ] Assets load (no 404s in browser console)
- [ ] Refresh on deep link doesn't break (SPA routing)

## Troubleshooting

### Workflow fails with "Missing VITE_API_KEY"
- You forgot Step 1. Add the secret and re-run the workflow.

### Blank page or 404
- Ensure Pages source is set to "GitHub Actions" (Step 2)
- Check if workflow completed successfully (Step 4)
- Verify `BASE_PATH` in `.github/workflows/pages.yml` matches repo name

### Assets return 404
- Clear browser cache
- Check browser console for specific failed URLs
- Verify `BASE_PATH=/copy-of-veo-studio/` in workflow file

### "Model not found" or API errors
- Verify your API key is valid and has Veo access
- Check API key permissions at https://aistudio.google.com/apikey
- Ensure key is for a billing-enabled Cloud project

## Quick Links

- **Secrets:** https://github.com/teefisher2k20/copy-of-veo-studio/settings/secrets/actions
- **Pages:** https://github.com/teefisher2k20/copy-of-veo-studio/settings/pages  
- **Actions:** https://github.com/teefisher2k20/copy-of-veo-studio/actions
- **Live Site:** https://teefisher2k20.github.io/copy-of-veo-studio/
- **Get API Key:** https://aistudio.google.com/apikey

---

**After completing Steps 1-2, the site will automatically deploy within 2-3 minutes!** 🚀
