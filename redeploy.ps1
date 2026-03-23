$Root = "C:\Users\mason.a.wolfe\Documents\Claude Code\Monster App"
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

Set-Location $Root

Write-Host "Committing and pushing..." -ForegroundColor Cyan
git add .
git commit -m "Update"
git push origin main

Write-Host "Deploying to Vercel..." -ForegroundColor Cyan
npx vercel --prod --yes

Write-Host "Done." -ForegroundColor Green
