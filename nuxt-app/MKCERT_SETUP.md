# Local SSL Setup with mkcert

This guide explains how to set up HTTPS on your local development environment using **mkcert**.

## Why Local SSL?

- Modern browsers require HTTPS for certain features
- Matches production environment (better testing)
- Secure by default during development

## Installation

### macOS (Homebrew)

```bash
brew install mkcert
brew install nss  # Required for Firefox
```

### Ubuntu/Debian

```bash
sudo apt-get install libnss3-tools
wget https://github.com/FiloSottile/mkcert/releases/download/v1.4.4/mkcert-v1.4.4-linux-amd64
mv mkcert-v1.4.4-linux-amd64 mkcert
chmod +x mkcert
sudo mv mkcert /usr/local/bin/
```

### Windows

**Option 1: Chocolatey**
```bash
choco install mkcert
```

**Option 2: Scoop**
```bash
scoop install mkcert
```

**Option 3: Manual Download**
- Download from: https://github.com/FiloSottile/mkcert/releases
- Add to PATH environment variable

## Generate Certificates

In the `nuxt-app/` directory, run:

```bash
mkcert localhost
```

This creates two files:

- **localhost.pem** — Certificate file
- **localhost-key.pem** — Private key file

These are referenced in `nuxt.config.ts` and automatically used by the dev server.

## Trust the Root CA (First Time Only)

To avoid browser warnings, trust mkcert's root certificate:

### macOS

```bash
mkcert -install
```

Then restart your browser.

### Ubuntu/Debian

```bash
mkcert -install
# Then manually trust in Firefox Settings if needed
```

### Windows

Run with Administrator privileges:

```bash
mkcert -install
```

Then clear browser cache and restart the browser.

## Verify Setup

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Open: **https://localhost:3000**

3. Check that the certificate shows as **valid** (no browser warnings)

## Troubleshooting

### Browser shows "Untrusted Certificate"

1. Run `mkcert -install` again
2. Quit and restart the browser completely
3. Clear browser cache: Settings → Privacy → Clear browsing data

### Firefox shows warning but certificate looks fine

Firefox maintains its own certificate store. Either:

1. Go to **about:preferences#privacy** → **Certificates** → **View Certificates** → Import the mkcert CA
2. Or, restart Firefox after running `mkcert -install`

### Certificate file not found at startup

Ensure `localhost.pem` and `localhost-key.pem` exist in the `nuxt-app/` root:

```bash
ls -la localhost*.pem
```

If missing, regenerate:

```bash
mkcert localhost
```

### "Cannot find mkcert" command

1. Verify installation: `which mkcert` (macOS/Linux) or `where mkcert` (Windows)
2. If not found, reinstall via package manager or add to PATH

## Cleanup

To remove mkcert and its root CA:

```bash
# Remove root CA (optional)
mkcert -uninstall

# Remove locally generated certificates
rm localhost.pem localhost-key.pem
```

## Learn More

- [mkcert GitHub](https://github.com/FiloSottile/mkcert)
- [Nuxt HTTPS Dev Setup](https://nuxt.com/docs/guide/going-further/devtools#enabling-https)
