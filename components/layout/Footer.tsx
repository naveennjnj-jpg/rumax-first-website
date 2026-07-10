import { asset, footerBadges, footerLinks, footerSocialLinks } from "@/data/site";
import { AssetImage } from "@/components/ui/AssetImage";

type FooterLink = {
  label: string;
  href: string;
};

function FooterNav({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <nav>
      <h2>{title}</h2>
      {links.map((link) => (
        <a href={link.href} key={link.label}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img className="footer__logo" src={asset("rumax-footer-logo.svg")} alt="Rumax" />
          <div className="footer__cqc-rating">
            <img className="footer__cqc" src={asset("rumax-footer-cqc-badge.svg")} alt="Care Quality Commission" />
            <span>Overall: Good</span>
          </div>
        </div>

        <div className="footer__menus">
          <FooterNav title="Useful Links" links={footerLinks.useful} />

          <nav className="two-col">
            <h2>Locations</h2>
            {footerLinks.locations.map((link, index) =>
              link ? (
                <a className={link.accent ? "footer-link--accent" : undefined} href="#" key={link.label}>
                  {link.label}
                </a>
              ) : (
                <span aria-hidden="true" key={`spacer-${index}`} />
              )
            )}
          </nav>

          <FooterNav title="Company" links={footerLinks.company} />

          <nav>
            <h2>Resources</h2>
            {footerLinks.resources.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
            <h2 className="footer-social-title">Social Media</h2>
            <p>Follow Rumax Limited across Essex to get the latest updates.</p>
            <div className="footer-socials">
              {footerSocialLinks.map((social) => (
                <a href="#" aria-label={social.label} key={social.label}>
                  <AssetImage name={social.icon} />
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          <span>
            Copyright 2026 &copy; RUMAX LIMITED 2026, trading as RUMAX LIMITED, registered in England and Wales at Cornwallis
            House, Unit 2, Howard Chase, Basildon, Essex, SS14 3BB, United Kingdom
          </span>
          <span>Registered No: 7468421 ICO Registration Nr: ZA038243 "Your Care, Our Commitment"</span>
        </p>
        <div className="footer-badges" aria-label="Rumax accreditation badges">
          {footerBadges.map((badge) => (
            <img src={asset(badge.icon)} alt={badge.label} key={badge.label} />
          ))}
        </div>
      </div>
    </footer>
  );
}
