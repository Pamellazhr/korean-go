"use client";

import { CaretLeft } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { data } from "../data";

function Photo360({ id }: { id: string }) {
  const panoRef = useRef(null);
  const sources = [
    {
      id: "1",
      src: "kenangan-virtual-photos/01HQ63T4V6V8MH1VHMF9R4VKD2.jpg",
    },
    {
      id: "2",
      src: "kenangan-virtual-photos/01HQ649P9ZQQ04FRFJVFDDGDCP.jpg",
    },
    {
      id: "3",
      src: "kenangan-virtual-photos/01HQ649PGD3HRZ05Z1BV69NE6P.jpg",
    },
    {
      id: "4",
      src: "kenangan-virtual-photos/01HQ649QC0FZAYMK27DNVGVZ0K.jpg",
    },
  ];

  useEffect(() => {
    var setMode = function () {
      if (mql.matches) {
        document.body.classList.remove("desktop");
        document.body.classList.add("mobile");
      } else {
        document.body.classList.remove("mobile");
        document.body.classList.add("desktop");
      }
    };
    var mql = matchMedia("(max-width: 500px), (max-height: 500px)");
    setMode();
    mql.addListener(setMode);

    // Detect whether we are on a touch device.
    document.body.classList.add("no-touch");
    window.addEventListener("touchstart", function () {
      document.body.classList.remove("no-touch");
      document.body.classList.add("touch");
    });

    // Viewer options.
    var viewerOpts = {
      controls: {
        mouseViewMode: data.settings.mouseViewMode,
      },
    };

    // Initialize viewer.
    const Marzipano = require("marzipano");
    var viewer = new Marzipano.Viewer(panoRef.current, viewerOpts);

    // Create scenes.
    var scenes = data.scenes.map(function (data) {
      var source = Marzipano.ImageUrlSource.fromString(
        `https://sgp1.vultrobjects.com/virtuwed-storage/${
          sources.find((data) => data.id === id)?.src
        }`,
        {
          cubeMapPreviewUrl: `https://sgp1.vultrobjects.com/virtuwed-storage/${
            sources.find((data) => data.id === id)?.src
          }`,
        }
      );

      var geometry = new Marzipano.EquirectGeometry(data.levels);

      var limiter = Marzipano.util.compose(
        Marzipano.RectilinearView.limit.vfov(
          0.698131111111111,
          2.09439333333333
        ),
        Marzipano.RectilinearView.limit.hfov(
          0.698131111111111,
          2.09439333333333
        ),
        Marzipano.RectilinearView.limit.pitch(-Math.PI / 2, Math.PI / 2)
      );
      var view = new Marzipano.RectilinearView(
        data.initialViewParameters,
        limiter
      );

      var scene = viewer.createScene({
        source: source,
        geometry: geometry,
        view: view,
        pinFirstLevel: true,
      });

      return {
        data: data,
        scene: scene,
        view: view,
      };
    });

    var autorotate = Marzipano.autorotate({
      yawSpeed: 0.03,
      targetPitch: 0,
      targetFov: Math.PI / 2,
    });

    viewer.startMovement(autorotate);
    viewer.setIdleMovement(3000, autorotate);

    function switchScene(scene: any) {
      scene.view.setParameters(scene.data.initialViewParameters);
      scene.scene.switchTo();
    }

    // Display the initial scene.
    switchScene(scenes[0]);
  }, []);

  return (
    <div className="h-screen-relative">
      <div className="h-full w-full absolute" ref={panoRef}></div>
      <div className="absolute bottom-0 inset-x-0 h-16 bg-white flex items-center text-[#A32F3F] rounded-tl-[45px] font-medium px-8 text-lg">
        <Link href="/gallery" className="flex items-center gap-2">
          <CaretLeft size={32} />
          <span>Back to gallery</span>
        </Link>
        <Image
          src="/cta-bg.svg"
          alt="accent"
          width={120}
          height={120}
          priority
          className="absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
}

export default Photo360;
