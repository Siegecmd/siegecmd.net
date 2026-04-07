import {
  useState,
  useEffect,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import * as cowsay from "cowsay";
import { Card, CardContent } from "@/components/ui/card";

const COWS = [
  cowsay.ACKBAR,
  cowsay.APERTURE,
  cowsay.APERTURE_BLANK,
  cowsay.ARMADILLO,
  cowsay.ATAT,
  cowsay.ATOM,
  cowsay.AWESOME_FACE,
  cowsay.BANANA,
  cowsay.BEARFACE,
  cowsay.BEAVIS_ZEN,
  cowsay.BEES,
  cowsay.BILL_THE_CAT,
  cowsay.BIOHAZARD,
  cowsay.BISHOP,
  cowsay.BLACK_MESA,
  cowsay.BONG,
  cowsay.BOX,
  cowsay.BROKEN_HEART,
  cowsay.BUD_FROGS,
  cowsay.BUNNY,
  cowsay.C3PO,
  cowsay.CAKE,
  cowsay.CAKE_WITH_CANDLES,
  cowsay.CAT,
  cowsay.CAT2,
  cowsay.CATFENCE,
  cowsay.CHARIZARDVICE,
  cowsay.CHARLIE,
  cowsay.CHEESE,
  cowsay.CHESSMEN,
  cowsay.CHITO,
  cowsay.CLAW_ARM,
  cowsay.CLIPPY,
  cowsay.COMPANION_CUBE,
  cowsay.COWER,
  cowsay.COWFEE,
  cowsay.CTHULHU_MINI,
  cowsay.CUBE,
  cowsay.DAEMON,
  cowsay.DALEK,
  cowsay.DALEK_SHOOTING,
  cowsay.DEFAULT,
  cowsay.DOCKER_WHALE,
  cowsay.DOGE,
  cowsay.DOLPHIN,
  cowsay.DRAGON,
  cowsay.DRAGON_AND_COW,
  cowsay.EBI_FURAI,
  cowsay.ELEPHANT,
  cowsay.ELEPHANT2,
  cowsay.ELEPHANT_IN_SNAKE,
  cowsay.EXPLOSION,
  cowsay.EYES,
  cowsay.FAT_BANANA,
  cowsay.FAT_COW,
  cowsay.FENCE,
  cowsay.FIRE,
  cowsay.FLAMING_SHEEP,
  cowsay.FOX,
  cowsay.GHOST,
  cowsay.GHOSTBUSTERS,
  cowsay.GLADOS,
  cowsay.GOAT,
  cowsay.GOAT2,
  cowsay.GOLDEN_EAGLE,
  cowsay.HAND,
  cowsay.HAPPY_WHALE,
  cowsay.HEDGEHOG,
  cowsay.HELLOKITTY,
  cowsay.HIPPIE,
  cowsay.HIYA,
  cowsay.HIYOKO,
  cowsay.HOMER,
  cowsay.HYPNO,
  cowsay.IBM,
  cowsay.IWASHI,
  cowsay.JELLYFISH,
  cowsay.KARL_MARX,
  cowsay.KILROY,
  cowsay.KING,
  cowsay.KISS,
  cowsay.KITTEN,
  cowsay.KITTY,
  cowsay.KNIGHT,
  cowsay.KOALA,
  cowsay.KOSH,
  cowsay.LAMB,
  cowsay.LAMB2,
  cowsay.LIGHTBULB,
  cowsay.LOBSTER,
  cowsay.LOLLERSKATES,
  cowsay.LUKE_KOALA,
  cowsay.MAILCHIMP,
  cowsay.MAZE_RUNNER,
  cowsay.MECH_AND_COW,
  cowsay.MEOW,
  cowsay.MILK,
  cowsay.MINOTAUR,
  cowsay.MONA_LISA,
  cowsay.MOOFASA,
  cowsay.MOOGHIDJIRAH,
  cowsay.MOOJIRA,
  cowsay.MOOSE,
  cowsay.MULE,
  cowsay.MUTILATED,
  cowsay.NYAN,
  cowsay.OCTOPUS,
  cowsay.OKAZU,
  cowsay.OWL,
  cowsay.PAWN,
  cowsay.PERIODIC_TABLE,
  cowsay.PERSONALITY_SPHERE,
  cowsay.PINBALL_MACHINE,
  cowsay.PSYCHIATRICHELP,
  cowsay.PSYCHIATRICHELP2,
  cowsay.PTERODACTYL,
  cowsay.QUEEN,
  cowsay.R2_D2,
  cowsay.RADIO,
  cowsay.REN,
  cowsay.RENGE,
  cowsay.ROBOT,
  cowsay.ROBOTFINDSKITTEN,
  cowsay.ROFLCOPTER,
  cowsay.ROOK,
  cowsay.SACHIKO,
  cowsay.SATANIC,
  cowsay.SEAHORSE,
  cowsay.SEAHORSE_BIG,
  cowsay.SHEEP,
  cowsay.SHIKATO,
  cowsay.SHRUG,
  cowsay.SKELETON,
  cowsay.SMALL,
  cowsay.SMILING_OCTOPUS,
  cowsay.SNOOPY,
  cowsay.SNOOPYHOUSE,
  cowsay.SNOOPYSLEEP,
  cowsay.SPIDERCOW,
  cowsay.SQUID,
  cowsay.SQUIRREL,
  cowsay.STEGOSAURUS,
  cowsay.STIMPY,
  cowsay.SUDOWOODO,
  cowsay.SUPERMILKER,
  cowsay.SURGERY,
  cowsay.TABLEFLIP,
  cowsay.TAXI,
  cowsay.TELEBEARS,
  cowsay.TEMPLATE,
  cowsay.THREADER,
  cowsay.THREECUBES,
  cowsay.TOASTER,
  cowsay.TORTOISE,
  cowsay.TURKEY,
  cowsay.TURTLE,
  cowsay.TUX,
  cowsay.TUX_BIG,
  cowsay.TWEETY_BIRD,
  cowsay.USA,
  cowsay.VADER,
  cowsay.VADER_KOALA,
  cowsay.WEEPING_ANGEL,
  cowsay.WHALE,
  cowsay.WIZARD,
  cowsay.WOOD,
  cowsay.WORLD,
  cowsay.WWW,
  cowsay.YASUNA_01,
  cowsay.YASUNA_02,
  cowsay.YASUNA_03,
  cowsay.YASUNA_03A,
  cowsay.YASUNA_04,
  cowsay.YASUNA_05,
  cowsay.YASUNA_06,
  cowsay.YASUNA_07,
  cowsay.YASUNA_08,
  cowsay.YASUNA_09,
  cowsay.YASUNA_10,
  cowsay.YASUNA_11,
  cowsay.YASUNA_12,
  cowsay.YASUNA_13,
  cowsay.YASUNA_14,
  cowsay.YASUNA_16,
  cowsay.YASUNA_17,
  cowsay.YASUNA_18,
  cowsay.YASUNA_19,
  cowsay.YASUNA_20,
  cowsay.YMD_UDON,
  cowsay.ZEN_NOH_MILK,
].filter(Boolean);

const MODES = ["b", "d", "g", "p", "s", "t", "w", "y"];

const FortuneCow = forwardRef(function FortuneCow(props, ref) {
  const [ascii, setAscii] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFortune = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/fortune");
      if (!res.ok) throw new Error("Failed to fetch fortune");
      const { fortune } = await res.json();

      const cow = COWS[Math.floor(Math.random() * COWS.length)];
      const mode = MODES[Math.floor(Math.random() * MODES.length)];

      const output = cowsay.say({
        text: fortune,
        cow,
        mode,
      });

      setAscii(output);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useImperativeHandle(ref, () => ({
    refresh: fetchFortune,
  }));

  useEffect(() => {
    fetchFortune();
  }, [fetchFortune]);

  return (
    <Card variant="glass" className="w-full p-4 mt-6">
      <CardContent className="p-0">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-400 uppercase tracking-wider">
            Fortune
          </span>
          <button
            onClick={fetchFortune}
            disabled={loading}
            className="p-1.5 rounded-lg bg-black/20 hover:bg-black/30 border border-black/30 transition disabled:opacity-50"
            title="New fortune"
          >
            <svg
              className={`w-4 h-4 ${loading ? "animate-spin" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>

        {error ? (
          <div className="text-red-400 text-sm">{error}</div>
        ) : (
          <pre
            className={`font-mono text-xs sm:text-sm leading-tight overflow-x-auto whitespace-pre text-gray-200 text-center transition-opacity duration-300 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
          >
            {ascii || "\u00A0"}
          </pre>
        )}
      </CardContent>
    </Card>
  );
});

export default FortuneCow;
