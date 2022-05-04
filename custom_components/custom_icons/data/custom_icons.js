/**
 * ----------------------------------
 * Custom Icons for Home Assistant
 * ----------------------------------
 * README: https://github.com/wwwescape/custom_icons/blob/main/README.md
 * ----------------------------------
 * by https://github.com/wwwescape
 */

const version = "1.0.0";

window.customIconsets = window.customIconsets || {};

const customIconsNamespace = {
  name: "custom_icons",
  fallback:
    "M11.9922 1.3945a.7041.7041 0 00-.498.211L.1621 13.0977A.5634.5634 0 000 13.494a.567.567 0 00.5664.5664H2.67v8.0743c0 .2603.2104.4707.4707.4707h7.9473v-3.6836L8.037 15.8672a2.42 2.42 0 01-.9473.1933c-1.3379 0-2.4218-1.0868-2.4218-2.4257 0-1.339 1.084-2.4239 2.4218-2.4239 1.338 0 2.422 1.085 2.422 2.4239 0 .3359-.068.6563-.1915.9472l1.7676 1.7676v-5.375C10.2 10.615 9.5723 9.744 9.5723 8.7266c0-1.339 1.0859-2.4258 2.4238-2.4258 1.338 0 2.4219 1.0868 2.4219 2.4258 0 1.0174-.6259 1.8884-1.5137 2.248v5.375l1.7656-1.7676a2.4205 2.4205 0 01-.1914-.9472c0-1.339 1.086-2.4239 2.4238-2.4239 1.338 0 2.422 1.085 2.422 2.4239 0 1.3389-1.084 2.4257-2.422 2.4257a2.42 2.42 0 01-.9472-.1933l-3.0508 3.0547v3.6836h7.9473a.4702.4702 0 00.4707-.4707v-8.0743h2.1113a.5686.5686 0 00.3965-.162c.2233-.2185.2262-.5775.0078-.8008l-2.5156-2.5723V6.4707c0-.2603-.2104-.4727-.4707-.4727h-1.9649c-.2603 0-.4707.2124-.4707.4727v1.1035L12.5 1.6035a.7056.7056 0 00-.5078-.209zm.0039 6.3614c-.5352 0-.9688.4351-.9688.9707 0 .5355.4336.9687.9688.9687a.9683.9683 0 00.9687-.9687c0-.5356-.4335-.9707-.9687-.9707zM7.0898 12.666a.9683.9683 0 00-.9687.9688c0 .5355.4336.9707.9687.9707.5352 0 .9688-.4352.9688-.9707a.9683.9683 0 00-.9688-.9688zm9.8125 0c-.5351 0-.9707.4332-.9707.9688 0 .5355.4356.9707.9707.9707.5352 0 .9688-.4352.9688-.9707a.9683.9683 0 00-.9688-.9688Z",
};

function log(how, what) {
  const style = {
    error: "background:#8b0000; color:white; padding:2px; border-radius:2px",
    warn: "background:#8b0000; color:white; padding:2px; border-radius:2px",
    log: "background:#222; color:#bada55; padding:2px; border-radius:2px;",
  };
  if (how !== "warn" && how !== "error") {
    how = "log";
  }
  console[how]("%cCustom Icons v" + version + ": " + what, style[how]);
}

function createCustomIconsets(namespaces) {
  // Add 'custom_icons' to the namespaces array
  namespaces.push(customIconsNamespace);

  if (namespaces.length) {
    namespaces?.forEach((namespace) => {
      let currentNamespace = namespace;
      async function loadFile(path) {
        const svgPath =
          currentNamespace.name === "custom_icons"
            ? `/local/custom_icons/${path}.svg`
            : `/local/custom_icons/${currentNamespace.name}/${path}.svg`;
        const response = await fetch(svgPath);
        if (response.ok) {
          const svgString = await response.text();
          return /d="(.*?)"/.exec(svgString)[1];
        } else {
          // Fallback
          return currentNamespace.fallback || customIconsNamespace.fallback;
        }
      }

      async function getIcon(name) {
        const svgString = await loadFile(name);
        return {
          path: svgString,
          viewBox: "-1 -1 26 26",
        };
      }

      window.customIconsets[
        namespace.name === "custom_icons" ? "ci" : "ci-" + namespace.name
      ] = getIcon;
    }, this);
  }

  log("log", "Loaded successfully!");
}

fetch("/local/custom_icons/namespaces.json").then(
  (namespaceResponse) => {
    if (namespaceResponse.ok) {
      namespaceResponse.json().then(
        (namespaces) => {
          createCustomIconsets(namespaces);
        },
        (namespaceError) => {
          log("warn", "No namespaces.json file found: " + namespaceError);
          createCustomIconsets([]);
        }
      );
    }
  },
  (namespacenamespaceResponseError) => {
    log(
      "warn",
      "No namespaces.json file found: " + namespacenamespaceResponseError
    );
    createCustomIconsets([]);
  }
);
